# playwright-bdd-typescript-allure-framework
A robust end-to-end (E2E) test automation framework built with Playwright, Cucumber (BDD), and TypeScript, integrated with Allure Reports for rich test reporting. This framework supports scalable and readable test cases following the BDD approach, ideal for testing modern web applications.

# 🧪 Playwright BDD Framework with TypeScript & Allure

This is a robust end-to-end (E2E) automation testing framework built with:

- ✅ [Playwright](https://playwright.dev/) – browser automation
- ✅ [Cucumber](https://cucumber.io/) – Behavior-Driven Development (BDD)
- ✅ [TypeScript](https://www.typescriptlang.org/) – static typing
- ✅ [Allure Reports](https://docs.qameta.io/allure/) – detailed and rich test reporting

---

## 📁 Project Structure
├── features/                # Gherkin feature files
├── step-defs/              # Step definitions for each feature
├── pages/                  # Page Object Models
├── locators/               # Locator definitions and utils
├── utils/                  # Helper functions (e.g., date utils)
├── tests/                  # Entry point to run tests
├── allure-results/         # Allure raw results (generated)
├── allure-report/          # Allure HTML reports (generated)
├── playwright.config.ts    # Playwright test configuration
└── cucumber.json           # Cucumber + Allure configuration


---

## 🚀 Getting Started

### 1. **Install dependencies**

```bash
npm install

## Run all feature files:
npx cucumber-js

## Run specific feature file:
npx cucumber-js features/your-feature-file.feature

## Run with tag filter:
npx cucumber-js --tags "@regression"

## View Allure Report
### Generate and open the Allure HTML report:
npm run allure:report
