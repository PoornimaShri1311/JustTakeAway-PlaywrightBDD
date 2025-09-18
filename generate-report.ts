import reporter from 'cucumber-html-reporter';

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true, // automatically opens in browser
  storeScreenshots: true,                    // ✅ Enables screenshot embedding
  screenshotsDirectory: 'screenshots',       // ✅ Must match your After hook path
  metadata: {
    "App Version":"1.0.0",
    "Browser": "Chrome",
    "Platform": "Windows 11"
  }
});
