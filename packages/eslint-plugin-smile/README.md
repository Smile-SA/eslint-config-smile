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

## Framework configuration

### JavaScript project

Update `.eslintrc.json` with:

```json
{
  "extends": ["plugin:smile/js"]
}
```

For TypeScript support see [TypeScript configuration](#typescript).

### React project

Install peerDependency:

```bash
npm i -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

And update `.eslintrc.json` with:

```json
{
  "extends": ["plugin:smile/react"]
}
```

For TypeScript support see [TypeScript configuration](#typescript).

### Vue project

Install peerDependency:

```bash
npm i -D eslint-plugin-vue
```

And update `.eslintrc.json` with:

```json
{
  "extends": ["plugin:smile/vue"]
}
```

For TypeScript also install following dependency:

```bash
npm i -D @vue/eslint-config-prettier @vue/eslint-config-typescript @rushstack/eslint-patch
```

And update `.eslintrc.json` with:

```js
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['plugin:smile/vue-ts'],
};
```

And see [TypeScript configuration](#typescript).

### Angular project

You can eslint to your project with `npm run ng add @angular-eslint/schematics`.

Then update `.eslintrc.json` with:

```json
{
  "extends": ["plugin:smile/angular"]
}
```

And see [TypeScript configuration](#typescript).

Also see [Prettier configuration](#prettier-configuration)

### Next project

Install peerDependency:

```bash
npm i -D eslint-config-next
```

And update `.eslintrc.json` with:

```json
{
  "extends": ["plugin:smile/next"]
}
```

For TypeScript support see [TypeScript configuration](#typescript).

### Nuxt project

Install peerDependency:

```bash
npm i -D @nuxt/eslint-config eslint-plugin-nuxt
```

And update `.eslintrc.json` with:

```json
{
  "extends": ["plugin:smile/nuxt"]
}
```

For TypeScript support see [TypeScript configuration](#typescript).

## Tools configurations

### Jest project

If you use Jest in your project you can add the `plugin:smile/jest` configuration:

Install peerDependency:

```bash
npm i -D eslint-plugin-jest eslint-plugin-testing-library
```

And update `.eslintrc.json` with:

```json
{
  "extends": ["plugin:smile/jest"]
}
```

### Cypress

Cypress files will be automatically checked with any framework configuration.

### Storybook

Storybook files will be automatically checked with any framework configuration.

## TypeScript configuration

Install additional peerDependency:

```bash
npm i -D eslint-import-resolver-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

TypeScript is already supported in following configurations:

- `plugin:smile/js`
- `plugin:smile/react`
- `plugin:smile/angular`
- `plugin:smile/next`
- `plugin:smile/nuxt`

For Vue use `plugin:smile/vue-ts` instead.

If you want to use additional rules that require type checking (see https://typescript-eslint.io/linting/typed-linting/) you can add install additional peerDependency:

```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

And add the following configuration `plugin:smile/ts` (in addition to your framework configuration) and add the `parserOptions.project` option (see https://typescript-eslint.io/packages/parser/#project).

Example:

```json
{
  "extends": ["plugin:smile/next", "plugin:smile/ts"],
  "parserOptions": {
    "project": ["./tsconfig.json"]
  }
}
```

## Prettier configuration

This package use `eslint-plugin-prettier` to format the code with `prettier` through `eslint`.

We recommend using a `.prettierrc` file a the root of your project and apply the following configuration:

```json
{
  "singleQuote": true
}
```

Also create a `.editorconfig` file with:

```ini
[*]
charset = utf-8
insert_final_newline = true
end_of_line = lf
indent_style = space
indent_size = 2
max_line_length = 80
trim_trailing_whitespace = true
```

For angular add the following configuration into the `.prettierrc` file:

```json
{
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}
```

## Custom Configuration

You can override some rules in the rule section:

```js
{
  "extends": ["plugin:smile/js"],
  "rules": {
    "no-underscore-dangle": ["error", { allow: ["__schema"] }],
    // ...
  }
}
```
