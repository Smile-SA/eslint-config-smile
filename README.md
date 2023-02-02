# `eslint-plugin-smile`

This ESLint configuration enforces some rules for eslint.

## Installation

Assuming you already have ESLint installed, run:

```sh
# npm
npm install eslint-plugin-smile --save-dev

# yarn
yarn add eslint-plugin-smile --dev
```

Then extend the recommended eslint config:

```js
{
  "extends": [
    // ...
    "plugin:smile/recommended"
  ]
}
```

### Custom Configuration

You can override some rules in the rule section:

```js
{
  "extends": [
    // ...
    "plugin:smile/recommended"
  ],
  "rules": {
    "no-underscore-dangle": ["error", { allow: ["__schema"] }],
    // ...
  }
}
```
