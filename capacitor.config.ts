import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.eb75fada09f54a1497dcbbbc2c170211',
  appName: 'prsm-scheduling-wizardry',
  webDir: 'dist',
  server: {
    url: 'https://eb75fada-09f5-4a14-97dc-bbbc2c170211.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;