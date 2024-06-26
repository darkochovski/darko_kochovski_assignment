import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testMatch: ["tests/*.ts"],
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "on",
    launchOptions: {
    },
  },
  retries: 0,
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "jsonReports/jsonReport.json",
      },
    ],
    [
      "html",
      {
        open: "always",
      },
    ],
  ],
};

export default config;

