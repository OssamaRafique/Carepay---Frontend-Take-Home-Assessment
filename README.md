# CarePay Front-End Assignment

## Task description

Create a new simple Angular 2+ application. This application should include one page with a search input field and a table with treatments of patients. The search input can be used to filter treatments by treatment code.

To reduce load on the API, the front-end should wait for the user to stop typing before making an API request.

Treatments must be retrieved by using fake REST API (https://github.com/typicode/json-server). You can find `db.json` file in the repository.

Search field validation:

- Treatment code must include at least three identical letters, regardless of order. For example, treatment codes "aaa", "aa2a" and
  "zz222z" are valid, while "aabbcc" is not.

**Treat the project as if it would go in production when you are done. So please make sure to unit test the application
properly, but also think about the application structure, maintainability, readability, and code quality.**

If there are any points that are not clear from this task, you can make assumptions. Assumption that are vital to the
understanding of the solution can be written down in an .md file.

## Installation

Use the package manager [npm] to install modules.

```bash
npm install
```

## Usage

```bash

# Run Angular & JSON server together
npm run start:dev

# Run Unit Tests
npm run test

# Run Documentation Of Project
npm run start:documentation

# All Scripts:
{
    "start": "ng serve",
    "start:dev": "concurrently --kill-others \"npm run start:server\" \"npm run start:proxy\"",
    "start:documentation": "npm run build:compodoc && npm run serve:compodoc",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test --code-coverage  --source-map",
    "start:proxy": "ng serve --proxy-config proxy.conf.json",
    "start:server": "json-server --watch db.json",
    "serve:compodoc": "http-server documentation",
    "build:compodoc": "npx compodoc -p tsconfig.doc.json"
}
```

## Required Tasks:

- ✅ This application should include one page with a search input field and a table with treatments of patients
- ✅ The search input can be used to filter treatments by treatment code
- ✅ To reduce load on the API, the front-end should wait for the user to stop typing before making an API request.
- ✅ Treatments must be retrieved by using fake REST API (https://github.com/typicode/json-server). You can find db.json file in the repository.
- ✅ Search field validation:
- ✅ Documentation
- ✅ Unit Tests

## Extra Features:

- ⭐ Compodoc Documentation 100% Coverage
- ⭐ Unit Tests 100% Coverage
- ⭐ Pagination For Table
- ⭐ 404 Not Found Page

## Application Structure

![alt text](https://github.com/OssamaRafique/Carepay-Frontend-Take-Home-Assessment/blob/develop/src/assets/readme/application-structure.png?raw=true)

## Documentaion Coverage

![alt text](https://github.com/OssamaRafique/Carepay-Frontend-Take-Home-Assessment/blob/develop/src/assets/readme/documentation-coverage.png?raw=true)

## Unit Tests Coverage

![alt text](https://github.com/OssamaRafique/Carepay-Frontend-Take-Home-Assessment/blob/develop/src/assets/readme/unit-tests-coverage.png?raw=true)
