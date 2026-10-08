const { defineConfig, devices } = require('@playwright/test');
import dotenv from 'dotenv';
import path from 'path';
const env = process.env.TEST_ENV || 'qa';
dotenv.config({
    path: path.resolve(__dirname, `config/.env.${env}`),
});
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});