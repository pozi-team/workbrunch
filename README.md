# Workspace + Brunch setup


## Installation

* Clone this repo
* Install dependencies `yarn install`

## Getting started

* Build all packages except main package (`@base/app`)
```
yarn build:packages
```
* Run brunch watch
```
yarn start
```

## Caveats:
* Everytime there is a change in `@base/ui` package, it needs to be rebuilt and brunch must be restarted to get updated package. This because:
    *  Brunch doesn't understand module naming in each package (i.e `@components`). Even though a module resolver can be added, we have to maintain on both ends.
    * If `@base/ui` package being built by brunch, the output will be joined in `app.js`. It results in `@base/app` package unable to import it from [package.json](https://github.com/pozi-team/workbrunch/blob/master/packages/app/package.json#L13), contrary with workspace idea. Unless we can tell brunch to to compile all files from `@base/ui` and output the result to `/package/ui/lib` while at the same time compiling `@base/app` and output to `/dist`.
* Each package has their own build tools so that it can be built by running `yarn build` on its own. This makes each package being modular and testable.
