[![Build Status](https://travis-ci.org/ddubson/bookmarkr.svg?branch=master)](https://travis-ci.org/ddubson/bookmarkr)
[![codecov](https://codecov.io/gh/ddubson/bookmarkr/branch/master/graph/badge.svg)](https://codecov.io/gh/ddubson/bookmarkr)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

# Bookmarkr

## Running Locally (MacOS / *Nix)

```bash
cd web/
yarn
yarn start (port 1234)

cd api/
yarn
yarn serve (port 8080)
```

---

## API

### Stack

- Typescript (transpiled to `ES5`)

#### Test Tools

- Jest (using `ts-jest` as bridge from `typescript` to `ES5`)

---

## Web (Client)

### Stack

- Parcel Bundler
- React 16
- Typescript

#### Test Tools

- Jest (using `ts-jest` as bridge from `typescript` to `ES5`)
- Enzyme
- Cypress - E2E Testing
- Pact - Contract Testing

### End-to-End (e2e) Testing

Using Cypress to test use cases of the application.

`cypress.json` contains the base configurations for Cypress runtime including `baseUrl` which defines the front end
for testing against. It is set locally to the location where the front end is started.

`cypress:open` script opens the Cypress runtime locally.
`cypress:run` is run headless in CI. It requires the front and back end to be started (preferably in DEV mode).

### Contract Testing

Using Pact to create a consumer-driven contracts generated by the front end, to be fulfilled by the back end.

#### Front End (Generate Contract)

It uses a special `test:pact` npm task that loads from `config/pact/jest.config.js` configuration which has the Pact
runtime loaded to be able to verify that the front end makes the appropriate requests, and then generates the contract
in `json` form into the `pacts/` directory.

#### Back End (Verify Contract)

Install `gem install pact-provider-verifier`
Launch service via `yarn build && yarn serve`
Run from root: `pact-provider-verifier pacts/books-web-client-books-api.json --provider-base-url=http://localhost:8080`

---

## Continuous Integration / Deployment

### Integration

Travis CI runs all tests of each project and builds a set of artifacts.

### Deployment

Deploy on every commit to master (given all tests are green!) to
PCF (Pivotal Cloud Foundry)