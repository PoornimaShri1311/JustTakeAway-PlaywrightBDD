
# 🧪 Playwright BDD Automation Framework (TypeScript + Cucumber + Allure)

A powerful, maintainable end-to-end automation framework built with:

- 🎭 **Playwright** for browser automation  
- 🧪 **Cucumber** for BDD-style Gherkin scenarios  
- 🔷 **TypeScript** for robust and typed scripting  
- 📊 **Allure Reports** for rich, visual test results

---

## 📁 Folder Structure

```
project-root/
├── features/                # Gherkin feature files
├── step-defs/              # Step definitions for features
├── pages/                  # Page Object Models (POM)
├── locators/               # Reusable locator definitions
├── utils/                  # Utilities (e.g., date helper)
├── tests/                  # Test runner entry point
├── allure-results/         # Raw results for Allure
├── allure-report/          # HTML report output
├── playwright.config.ts    # Playwright configuration
└── cucumber.json           # Cucumber configuration
```

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

---

### 2️⃣ Run Tests

Run all scenarios:

```bash
npx cucumber-js
```

Run a specific feature:

```bash
npx cucumber-js features/flight-search.feature
```

Run tests with tag:

```bash
npx cucumber-js --tags "@regression"
```

---

### 3️⃣ Generate Allure Report

To generate and open the report:

```bash
npm run allure:report
```

Or manually:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

---

## ⚙️ Add Custom Scripts (optional)

Add this to your `package.json`:

```json
"scripts": {
  "test": "npx cucumber-js",
  "allure:generate": "allure generate allure-results --clean -o allure-report",
  "allure:report": "npm run allure:generate && allure open allure-report"
}
```

---

## 🛠️ Playwright Config

`playwright.config.ts` is already set for:

- Maximized browser window
- Chromium browser
- Headless mode off (for visual debugging)
- Custom viewport and launch options
- Global timeout setup (if needed)

Example:

```ts
use: {
  headless: false,
  browserName: 'chromium',
  viewport: null,
  launchOptions: {
    args: ['--start-maximized'],
  },
  timeout: 10000  // Global timeout (10s)
}
```

---

## 📝 Sample Feature File

```gherkin
Feature: Flight Search

  Scenario: Validate direct flights
    Given I am on the flight search page
    When I search for flights from "Mumbai" to "Delhi"
    Then validate that the Direct Flight checkbox should be displayed as 'Checked' in the Flight Result Page
```

---

## 🔍 Sample Step Definition

```ts
Then("validate that the Direct Flight checkbox should be displayed as 'Checked' in the Flight Result Page", async function () {
  await flightResultPage.shouldDisplayDirectFlightCheckBoxStatusAs("Checked");
});
```

---

## 📊 Allure Report Output

Allure provides:

- ✅ Visual pass/fail indicators
- 🧾 Step-by-step logs
- 📸 Screenshots on failure
- 🏷️ Tags and categories
- 📁 Downloadable history

---

## 👨‍💻 Author

**Naseem Ahmed**  
QA Automation Specialist | Playwright • Cucumber • TypeScript • Allure

---

## 📜 License

Licensed under the **MIT License**.

