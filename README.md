# Gvzz - A Twitter Clone
Backend API by Gvzz using Nest framework (NodeJS + TypeSCript + PostgreeSQL)

![NodeJS Workflow](https://github.com/scaleracademy/twitter-backend-node/actions/workflows/nodejs.yml/badge.svg)


## Installation

```bash
$ npm install
```

## Setup Database

```psql
create database gvzdb;
 create user gvzadmin with encrypted password 'gvzpass';
 grant all privileges on database gvzdb to gvzadmin;
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
 
## License

This project is under the GNU AGPL v3.0 license
