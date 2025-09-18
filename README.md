# 🧪 Playwright BDD Automation Framework (TypeScript + Cucumber + HTML Report)

A robust and maintainable end-to-end automation framework built with:

- 🎭 **Playwright** for browser automation  
- 🧪 **Cucumber** for BDD-style Gherkin scenarios  
- 🔷 **TypeScript** for typed scripting  
- 📸 **Screenshot capture** on failure  
- 📊 **Cucumber HTML Reports** for visual test results

---

## 📁 Folder Structure

```
project-root/
├── features/                # Gherkin feature files
├── step-defs/              # Step definitions for features
├── pages/                  # Page Object Models (POM)
├── locators/               # Reusable locator definitions
├── utils/                  # Utilities (e.g., date helper)
├── screenshots/            # Screenshots captured on failure
├── generate-report.ts      # Report generator script
├── playwright.config.ts    # Playwright configuration
└── .gitignore              # Git exclusions
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
npx cucumber-js features/jet-career.feature
```

Run tests with tag:

```bash
npx cucumber-js --tags "@JET-Sales-Germany"
```

---

### 3️⃣ Generate HTML Report

After running tests, generate the report:

```bash
node generate-report.ts
```

This will create `cucumber_report.html` with embedded screenshots for failed scenarios.

---

## ⚙️ Add Custom Scripts (optional)

Add this to your `package.json`:

```json
"scripts": {
  "test": "npx cucumber-js",
  "report": "node generate-report.ts"
}
```

---

## 🛠️ Playwright Config

`playwright.config.ts` is configured for:

- Chromium browser
- Headless mode off (for visual debugging)
- Custom timeouts and viewport
- Launch options for maximized window

Example:

```ts
use: {
  headless: false,
  browserName: 'chromium',
  viewport: null,
  launchOptions: {
    args: ['--start-maximized'],
  },
  timeout: 30000
}
```

---

## 📸 Screenshot on Failure

Screenshots are automatically captured on test failure using Cucumber hooks:

```ts
After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
});
```

---

## 📝 Sample Feature File

```gherkin
Feature: Career Search

  Scenario: Validate job search results
    Given I am on the JET career page
    When I search for jobs in "Germany"
    Then I should see search results from multiple locations
```

---

## 🔍 Sample Step Definition

```ts
Then("I should see search results from multiple locations", async function () {
  await jetCareerAssertions.assertMultipleCountriesInResults();
});
```

---

## 👨‍💻 Author

Poornima Shri
