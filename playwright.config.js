/** @type {import('@playwright/test').PlaywrightTestConfig} */
export default {
  testMatch: 'index.spec.js',
  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: true
  }
}
