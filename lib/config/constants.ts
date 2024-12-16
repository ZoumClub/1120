export const APP_CONFIG = {
  name: 'AutoMarket',
  description: 'Find Your Perfect Car',
  maxImageSize: 5 * 1024 * 1024, // 5MB
  maxVideoSize: 100 * 1024 * 1024, // 100MB
  maxImages: 3,
} as const;

export const ROUTES = {
  home: '/',
  admin: {
    root: '/admin',
    login: '/admin/login',
    dashboard: '/admin/dashboard',
  },
  sell: '/sell',
} as const;