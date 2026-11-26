# E-Commerce Test Automation Framework

A practical e-Commerce test automation project built with Playwright and JavaScript, using Automation Exercise as the application under test.

## Current Coverage

- Login form heading validation.
- Invalid credentials error validation.

## Architecture

- Selectors define page locators.
- InteractiveFunctions implement user actions.
- Assertions contain reusable validations.
- Page Objects compose these components.
- Custom fixtures provide Page Objects to each test.

## Installation

Install project dependencies:

```bash
npm ci
```

Install Chromium and its system dependencies:

```bash
npx playwright install --with-deps chromium
```

## Running Tests

Run all tests:

```bash
npm test
```

Run tests with the browser visible:

```bash
npm run test:headed
```

Run UI tests:

```bash
npm run test:ui
```

