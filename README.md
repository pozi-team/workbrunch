# Workspace + Brunch setup


## Installation

* Clone this repo
* Install dependencies `yarn install`

## Getting started

* Build all packages except main package (@base/app)
```
yarn build:packages
```
* Run brunch watch
```
yarn start
```

Everytime there is a change in @base/ui package, it needs to be rebuilt and brunch must be restarted to get updated package.