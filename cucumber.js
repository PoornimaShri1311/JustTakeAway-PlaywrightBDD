module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require step-defs/**/*.ts',
    '--require support/**/*.ts',
    '--format json:cucumber_report.json',   // generate JSON for report
    '--format progress',
    'features/**/*.feature'
  ].join(' ')
};
// Note: You can run the reporter.js file separately after tests to generate the HTML report


