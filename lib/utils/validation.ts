export function validateFileSize(file: File, maxSize: number): boolean {
  return file.size <= maxSize;
}

export function validateFileType(file: File, allowedTypes: string[]): boolean {
  return allowedTypes.some(type => file.type.startsWith(type));
}

export function validateImageFile(file: File): { valid: boolean; error?: string } {
  if (!validateFileType(file, ['image/'])) {
    return { valid: false, error: 'Invalid file type. Please upload an image.' };
  }

  if (!validateFileSize(file, 5 * 1024 * 1024)) {
    return { valid: false, error: 'Image must be less than 5MB.' };
  }

  return { valid: true };
}

export function validateVideoFile(file: File): { valid: boolean; error?: string } {
  if (!validateFileType(file, ['video/'])) {
    return { valid: false, error: 'Invalid file type. Please upload a video.' };
  }

  if (!validateFileSize(file, 100 * 1024 * 1024)) {
    return { valid: false, error: 'Video must be less than 100MB.' };
  }

  return { valid: true };
}