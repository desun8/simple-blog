import { type CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: './storybook-static',
  },

  generateOnly: true,
  failOnDifference: true,

  lostPixelProjectId: 'clg26im9304bdie0e6w3whyxe',
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
