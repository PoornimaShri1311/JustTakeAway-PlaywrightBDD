// cucumber.js
module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require step-defs/**/*.ts',
    '--require support/**/*.ts',
    '--format allure-cucumberjs/reporter',
    '--format-options',
    '{"resultsDir":"allure-results"}',
    '--format progress',
    'features/**/*.feature'
  ].join(' ')
};