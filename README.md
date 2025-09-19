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

🔮 Future Improvements & Roadmap
✅ Implemented / In-Progress

•	Allure Reporting (in progress) → Report generation is partially integrated, pending stabilization and environment setup.

•	Jenkins CI/CD Integration → Jenkins pipeline created with Jenkinsfile; runs basic jobs successfully.

•	Cucumber Hooks for Setup/Teardown → Includes browser close, failure screenshot capture

•	Dockerized Setup (prototype) → Jenkins pipeline with Docker agent configured.

•	External Test Data Folder → test-data/ structure available; basic parameterization handled via feature files.

🔮 Planned Enhancements

•	External Test Data Handling (JSON)

Centralized data-driven testing by reading from JSON in test-data/ .

•	Parallel Execution 

Supports running tests on different browsers by setting environment variables (e.g., $env:BROWSER="webkit"; npx cucumber-js). Parallel execution across multiple workers is a planned enhancement.

•	Retry Mechanism for Flaky Tests

Add re-run strategy in Playwright/Cucumber to stabilize tests in CI/CD pipelines.

•	Tag-based Environment Config

Switch dynamically between dev, qa, stage, prod via environment config mapping.

•	API + UI Hybrid Testing

Extend framework to validate REST APIs alongside UI flows.

•	Stabilize Docker Setup

Ensure framework can run headless in containers for reproducible CI runs.

•	Advanced Allure Features

Add history trends, environment info, categories, and custom labels.

---

## 👨‍💻 Author

Poornima Shri
