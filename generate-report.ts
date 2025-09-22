import reporter from 'cucumber-html-reporter';
import fs from 'fs';
import path from 'path';

// Get dynamic values from environment variables or defaults
const ENV = process.env.ENV || 'qa';
const BROWSER = process.env.BROWSER || 'Chrome';
const PLATFORM = process.platform; // Node.js detected OS
const EXECUTION_DATE = new Date().toLocaleString();

// Build dynamic metadata object
const metadata: Record<string, string> = {
  Environment: ENV,
  Browser: BROWSER,
  Platform: PLATFORM,
   "Execution Time": EXECUTION_DATE
};

// Ensure screenshots directory exists
const screenshotsDir = path.resolve('screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Generate the report
reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  storeScreenshots: true,
  screenshotsDirectory: screenshotsDir,
  metadata,
  brandTitle: 'Just Eat Take Away Report',
  name: 'Automation Test Report',
});

console.log('✅ Cucumber HTML report generated successfully!');