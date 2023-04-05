import { type CustomProjectConfig } from 'lost-pixel';

const getConfig = (): CustomProjectConfig => {
  const storybookShots = {
    storybookUrl: './storybook-static',
  };

  if (process.env.LOCAL === 'true') {
    return {
      generateOnly: true,
      failOnDifference: true,
      storybookShots,
    };
  }

  return {
    // lostPixelProjectId: 'clg26im9304bdie0e6w3whyxe',
    // apiKey: process.env.LOST_PIXEL_API_KEY,
    generateOnly: true,
    // failOnDifference: true,
    storybookShots,
  };
};

export const config = getConfig();
