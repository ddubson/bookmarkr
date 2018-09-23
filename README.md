[![Build Status](https://travis-ci.org/ddubson/book-store-app.svg?branch=master)](https://travis-ci.org/ddubson/book-store-app)
[![codecov](https://codecov.io/gh/ddubson/book-store-app/branch/master/graph/badge.svg)](https://codecov.io/gh/ddubson/book-store-app)

# Book Store App

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

---

## Continuous Integration / Deployment

### Integration

Travis CI runs all tests of each project and builds a set of artifacts.

### Deployment

Deploy on every commit to master (given all tests are green!) to
PCF (Pivotal Cloud Foundry)