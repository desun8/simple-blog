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

  // @ts-expect-error: For ci it's ok
  return {
    lostPixelProjectId: 'clg26im9304bdie0e6w3whyxe',
    apiKey: process.env.LOST_PIXEL_API_KEY,
    storybookShots,
  };
};

export const config = getConfig();
