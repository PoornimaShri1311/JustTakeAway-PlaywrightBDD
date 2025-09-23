const fs = require('fs');
const path = require('path');

let retryCount = 1; // default retry count

// 1️⃣ Read default from JSON
const configPath = path.resolve(__dirname, '../test-data/testingData.json'); 
if (fs.existsSync(configPath)) {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  retryCount = config.retryCount ?? retryCount;
}

// 2️⃣ Override from environment variable / PowerShell 
if (process.env.RETRIES !== undefined) {
  retryCount = parseInt(process.env.RETRIES, 10);
}

console.log('Retry count from Command Prompt ** ', retryCount);

// 3️⃣ Unique report file per worker (using process ID)
const reportDir = path.resolve(__dirname, 'reports/json');
if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir, { recursive: true });}

const reportFile = `reports/json/cucumber_report_${process.pid}.json`;



module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require step-defs/**/*.ts',
    '--require support/**/*.ts',
    '--format json:cucumber_report.json',
    '--format progress', 
    retryCount > 0 ? `--retry ${retryCount}` : '',
    'features/**/*.feature'
  ].filter(Boolean).join(' ')
};