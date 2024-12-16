import { supabase } from '@/lib/config/supabase';

export async function uploadMedia(
  file: File,
  path: string,
  options: { maxSize?: number; contentType?: string } = {}
): Promise<{ url: string; error?: string }> {
  try {
    const { maxSize = 5 * 1024 * 1024, contentType } = options;

    if (file.size > maxSize) {
      return { 
        url: '', 
        error: `File size must be less than ${Math.round(maxSize / (1024 * 1024))}MB` 
      };
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('media')
      .upload(filePath, file, {
        contentType,
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('media')
      .getPublicUrl(filePath);

    return { url: publicUrl };
  } catch (error) {
    console.error('Error uploading file:', error);
    return { 
      url: '', 
      error: 'Failed to upload file. Please try again.' 
    };
  }
}

export async function deleteMedia(path: string): Promise<{ error?: string }> {
  try {
    const { error } = await supabase.storage
      .from('media')
      .remove([path]);

    if (error) throw error;
    return {};
  } catch (error) {
    console.error('Error deleting file:', error);
    return { error: 'Failed to delete file' };
  }
}