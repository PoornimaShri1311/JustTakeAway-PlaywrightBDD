const { CucumberJSAllureFormatter } = require('allure-cucumberjs');
const { AllureRuntime } = require('allure-js-commons'); // ← correct package
const path = require('path');

class AllureReporter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(
      options,
      new AllureRuntime({
        resultsDir: path.resolve(process.cwd(), 'allure-results'),
      }),
      {}
    );
  }
}

module.exports = AllureReporter;