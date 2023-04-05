import { type CustomProjectConfig } from 'lost-pixel';

// @ts-expect-error: For CI it's ok
export const config: CustomProjectConfig =
  process.env.LOCAL === 'true'
    ? {
        storybookShots: {
          storybookUrl: './storybook-static',
        },

        generateOnly: true,
        failOnDifference: true,
      }
    : {
        storybookShots: {
          storybookUrl: './storybook-static',
        },

        lostPixelProjectId: 'clg26im9304bdie0e6w3whyxe',
        apiKey: process.env.LOST_PIXEL_API_KEY,
      };
