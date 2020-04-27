# cypress-react-unit-test [![CircleCI](https://circleci.com/gh/bahmutov/cypress-react-unit-test/tree/master.svg?style=svg)](https://circleci.com/gh/bahmutov/cypress-react-unit-test/tree/master) [![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://dashboard.cypress.io/#/projects/z9dxah) [![renovate-app badge][renovate-badge]][renovate-app] [![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/bahmutov/cypress-react-unit-test)

> A little helper to unit test React components in the open source [Cypress.io](https://www.cypress.io/) E2E test runner **v4.5.0+**

## TLDR

- What is this? This package allows you to use [Cypress](https://www.cypress.io/) test runner to unit test your React components with zero effort.

![Example component test](images/dynamic.gif)

- How is this different from [Enzyme](https://github.com/airbnb/enzyme) or [RTL](https://testing-library.com/docs/react-testing-library/intro)? It is similar in functionality BUT runs the component in the real browser with full power of Cypress E2E test runner: [live GUI, full API, screen recording, CI support, cross-platform](https://www.cypress.io/features/), and [visual testing](https://on.cypress.io/visual-testing). Ohh, and the code coverage is built-in!
- If you like using `@testing-library/react`, you can use `@testing-library/cypress` for the same `findBy`, `queryBy` commands, see one of the examples in the list below

## Known problems

See issues labeled [v2](https://github.com/bahmutov/cypress-react-unit-test/labels/v2)

## Install

Requires [Node](https://nodejs.org/en/) version 8 or above.

```sh
npm install --save-dev cypress cypress-react-unit-test
```

1. Include this plugin from your project's `cypress/support/index.js`

```js
require('cypress-react-unit-test/support')
```

2. Tell Cypress how your React application is transpiled or bundled (using Webpack), so Cypress can load your components. See [Recipes](./docs/recipes.md)

3. ⚠️ Turn the experimental component support on in your `cypress.json`. You can also specify where component spec files are located. For exampled to have them located in `src` folder use:

```json
{
  "experimentalComponentTesting": true,
  "componentFolder": "src"
}
```

## Examples

```js
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { HelloWorld } from './hello-world.jsx'
describe('HelloWorld component', () => {
  it('works', () => {
    mount(<HelloWorld />)
    // now use standard Cypress commands
    cy.contains('Hello World!').should('be.visible')
  })
})
```

Look at the examples in [cypress/component](cypress/component) folder. Here is the list in progress

### Basic examples

<!-- prettier-ignore-start -->
Spec | Description
--- | ---
[alert-spec.js](cypress/component/basic/alert-spec.js) | Component tries to use `window.alert`
[counter-spec.js](cypress/component/basic/counter-spec.js) | Counter component that uses `this.state`
[emotion-spec.js](cypress/component/basic/emotion-spec.js) | Confirms the component is using `@emotion/core` and styles are set
[error-boundary-spec.js](cypress/component/basic/error-boundar-spec.js) | Checks if an error boundary component works
[pure-component-spec.js](cypress/component/basic/pure-component.spec.js) | Tests stateless component
[stateless-spec.js](cypress/component/basic/stateless-spec.js) | Passes Cypress stub to the component, confirms the component calls it on click
[window-spec.js](cypress/component/basic/window-spec.js) | In the component test, the spec `window` and the application's `window` where the component is running should be the same object
[css](cypress/component/basic/css) | Shows that component with `import './Button.css'` works
[network](cypress/component/basic/network) | Confirms we can use `cy.route` to stub / spy on component's network calls
[react-book-by-chris-noring](cypress/component/basic/react-book-by-chris-noring) | Copied test examples from [React Book](https://softchris.github.io/books/react) and adapted for Cypress component tests
[react-tutorial](cypress/component/basic/react-tutorial) | Tests from official [ReactJS tutorial](https://reactjs.org/tutorial/tutorial.html) copied and adapted for Cypress component tests
[stub-example](cypress/component/basic/stub-example) | Uses `cy.stub` as component props
[styles](cypress/component/basic/styles) | Add extra styles to the component during testing using `style`, `cssFile` or `stylesheets` mount options
[toggle-example](cypress/component/basic/toggle-example) | Testing a toggle component using Cypress DOM commands
[typescript](cypress/component/basic/typescript) | A spec written in TypeScript
[unmount](cypress/component/basic/unmount) | Verifies the component's behavior when it is unmounted from the DOM
[use-lodash-fp](cypress/component/basic/use-lodash-fp) | Imports and tests methods from `lodash/fp` dependency
<!-- prettier-ignore-end -->

plus a few smaller sanity specs in [cypress/component/basic](cypress/component/basic) folder.

### Advanced examples

<!-- prettier-ignore-start -->
Spec | Description
--- | ---
[app-action-example](cypress/component/advanced/app-action-example) | App actions against components
[context](cypress/component/advanced/context) | Confirms components that use React context feature work
[forward-ref](cypress/component/advanced/forward-ref) | Tests a component that uses a forward ref feature
[hooks](cypress/component/advanced/hooks) | Tests several components that use React Hooks like `useState`, `useCallback`
[lazy-loaded](cypress/component/advanced/lazy-loaded) | Confirms components that use `React.lazy` and dynamic imports work
[material-ui-example](cypress/component/advanced/material-ui-example) | Large components demos from [Material UI](https://material-ui.com/)
[mock-fetch](cypress/component/advanced/mock-fetch) | Test stubs `window.fetch` used by component in `useEffect` hook
[mocking-component](cypress/component/advanced/mocking-component) | Replaced a child component with dummy component during test
[mocking-imports](cypress/component/advanced/mocking-imports) | Stub a named ES6 import using `plugin-transform-modules-commonjs` with `loose: true` when transpiled
[react-router-v6](cypress/component/advanced/react-router-v6) | Example testing a [React Router v6](https://github.com/ReactTraining/react-router/blob/dev/docs/guides/getting-started.md)
[renderless](cypress/component/advanced/renderless) | Testing a component that does not need to render itself into the DOM
[set-timeout-example](cypress/component/advanced/set-timeout-example) | Control the clock with `cy.tick` and test loading components that use `setTimeout`
[testing-lib-example](cypress/component/advanced/testing-lib-example) | A spec adopted from [@testing-library/react](https://testing-library.com/docs/react-testing-library/example-intro) that uses [@testing-library/cypress](https://testing-library.com/docs/cypress-testing-library/intro)
[timers](cypress/component/advanced/timers) | Testing components that set timers, adopted from [ReactJS Testing recipes](https://reactjs.org/docs/testing-recipes.html#timers)
[tutorial](cypress/component/advanced/tutorial) | A few tests adopted from [ReactJS Tutorial](https://reactjs.org/tutorial/tutorial.html)
<!-- prettier-ignore-end -->

### Large examples

This way of component testing has been verified in a number of forked 3rd party projects.

<!-- prettier-ignore-start -->
Repo | Description
--- | ---
[try-cra-with-unit-test](https://github.com/bahmutov/try-cra-with-unit-test) | Hello world initialized with CRAv3
[try-cra-app-typescript](https://github.com/bahmutov/try-cra-app-typescript) | Hello world initialized with CRAv3 `--typescript`
[react-todo-with-hooks](https://github.com/bahmutov/react-todo-with-hooks) | Modern web application using hooks
[test-redux-examples](https://github.com/bahmutov/test-redux-examples) | Example apps copies from official Redux repo and tested as components
[test-react-hooks-animations](https://github.com/bahmutov/test-react-hooks-animations) | Testing React springs fun blob animation
[test-mdx-example](https://github.com/bahmutov/test-mdx-example) | Example testing MDX components using Cypress
[test-apollo](https://github.com/bahmutov/test-apollo) | Component testing an application that uses Apollo GraphQL library
[test-xstate-react](https://github.com/bahmutov/test-xstate-react) | XState component testing using Cypress
[test-react-router-v5](https://github.com/bahmutov/test-react-router-v5) | A few tests of React Router v5
[test-material-ui](https://github.com/bahmutov/test-material-ui) | Testing Material UI components: date pickers, lists, autocomplete
[test-d3-react-gauge](https://github.com/bahmutov/test-d3-react-gauge) | Testing React D3 gauges
[storybook-code-coverage](https://github.com/bahmutov/storybook-code-coverage) | Example app where we get 100% code coverage easily with a single integration spec and a few component specs, replacing [several tools](https://dev.to/penx/combining-storybook-cypress-and-jest-code-coverage-4pa5)
[react-loading-skeleton](https://github.com/bahmutov/react-loading-skeleton) | One to one Storybook tests for React skeleton components. Uses local `.babelrc` settings without Webpack config
<!-- prettier-ignore-end -->

To find more examples, see GitHub topic [cypress-react-unit-test-example](https://github.com/topics/cypress-react-unit-test-example)

## Options

You can pass additional styles, css files and external stylesheets to load, see [docs/styles.md](./docs/styles.md) for full list.

```js
const todo = {
  id: '123',
  title: 'Write more tests',
}
mount(<Todo todo={todo} />, {
  stylesheets: [
    'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css',
  ],
})
```

<details>
<summary>Additional configuration</summary>
If your React and React DOM libraries are installed in non-standard paths (think monorepo scenario), you can tell this plugin where to find them. In `cypress.json` specify paths like this:

```json
{
  "env": {
    "cypress-react-unit-test": {
      "react": "node_modules/react/umd/react.development.js",
      "react-dom": "node_modules/react-dom/umd/react-dom.development.js"
    }
  }
}
```

</details>

## Code coverage

If you are using [plugins/cra-v3](plugins/cra-v3) it instruments the code on the fly using `babel-plugin-istanbul` and generates report using dependency [cypress-io/code-coverage](https://github.com/cypress-io/code-coverage) (included). If you want to disable code coverage instrumentation and reporting, use `--env coverage=false` or `CYPRESS_coverage=false` or set in your `cypress.json` file

```json
{
  "env": {
    "coverage": false
  }
}
```

## Visual testing

You can use any [Visual Testing plugin](https://on.cypress.io/plugins#visual-testing) from these component tests. This repo uses [Percy.io](https://percy.io) visual diffing service as a GitHub pull request check.

## Development

See [docs/development.md](./docs/development.md)

## Related tools

Same feature for unit testing components from other frameworks using Cypress

- [cypress-vue-unit-test](https://github.com/bahmutov/cypress-vue-unit-test)
- [cypress-cycle-unit-test](https://github.com/bahmutov/cypress-cycle-unit-test)
- [cypress-svelte-unit-test](https://github.com/bahmutov/cypress-svelte-unit-test)
- [cypress-angular-unit-test](https://github.com/bahmutov/cypress-angular-unit-test)
- [cypress-hyperapp-unit-test](https://github.com/bahmutov/cypress-hyperapp-unit-test)
- [cypress-angularjs-unit-test](https://github.com/bahmutov/cypress-angularjs-unit-test)

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
