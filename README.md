# E-Commerce Test Automation Framework

A practical e-Commerce test automation project built with Playwright and JavaScript, using Automation Exercise as the application under test.

## Current Coverage

- Login form heading validation.
- Invalid credentials error validation.
- Successful login with the expected user displayed.
- Logout with the login form displayed again.
- Authenticated session reuse without repeating the UI login in the test.

## Architecture

- Selectors define page locators.
- InteractiveFunctions implement user actions.
- Assertions contain reusable validations.
- Page Objects compose these components.
- Custom fixtures provide Page Objects to each test.
- Shared components encapsulate elements used across pages, such as the Header.

## Installation

Install project dependencies:

```bash
npm ci
```

Install Chromium and its system dependencies:

```bash
npx playwright install --with-deps chromium
```

Copy the environment template:

```bash
cp .env.example .env
```

Set `TEST_USER_EMAIL`, `TEST_USER_PASSWORD`, and `TEST_USER_NAME`
using a registered Automation Exercise test account.

The local `.env` file is excluded from version control.

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

## Authentication State

The setup project logs in, verifies the expected user and saves
authentication state to `playwright/.auth/user.json`.

The authenticated project depends on setup and loads the saved state
into a separate browser context for each test.

The guest project runs without saved authentication state.

Authentication state files are excluded from version control.
Separate browser contexts may still access shared server-side account data.

Run authenticated tests, including setup:

```bash
npx playwright test --project=authenticated
```

Run guest tests independently:

```bash
npx playwright test --project=guest
```