const fs = require('fs');
const path = require('path');

let retryCount = 1; // default retry count

// 1️⃣ Read default from JSON
const configPath = path.resolve(__dirname, '../test-data/testing-data.json'); 
if (fs.existsSync(configPath)) {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  retryCount = config.retryCount ?? retryCount;
}

// 2️⃣ Override from environment variable / PowerShell 
if (process.env.RETRIES !== undefined) {
  retryCount = parseInt(process.env.RETRIES, 10);
}

console.log('Retry count:', retryCount);

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