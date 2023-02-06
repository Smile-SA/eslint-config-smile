const overrideRules = {
  '@typescript-eslint/no-extraneous-class': 'off',
};

// @see https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin/docs/rules
const angularRules = {
  '@angular-eslint/component-max-inline-declarations': 'error',
  '@angular-eslint/component-selector': [
    'error',
    {
      prefix: 'app',
      style: 'kebab-case',
      type: 'element',
    },
  ],
  '@angular-eslint/contextual-decorator': 'error',
  '@angular-eslint/directive-selector': [
    'error',
    {
      prefix: 'app',
      style: 'camelCase',
      type: 'attribute',
    },
  ],
  // '@angular-eslint/no-attribute-decorator': 'error',
  '@angular-eslint/no-conflicting-lifecycle': 'error',
  '@angular-eslint/no-empty-lifecycle-method': 'error',
  // '@angular-eslint/no-forward-ref': 'error',
  // '@angular-eslint/no-input-prefix': 'error',
  // '@angular-eslint/no-lifecycle-call': 'error',
  // '@angular-eslint/no-pipe-impure': 'error',
  '@angular-eslint/no-queries-metadata-property': 'error',
  // '@angular-eslint/pipe-prefix': 'error',
  // '@angular-eslint/prefer-on-push-component-change-detection': 'error',
  '@angular-eslint/prefer-output-readonly': 'error',
  '@angular-eslint/relative-url-prefix': 'error',
  // '@angular-eslint/require-localize-metadata': 'error',
  '@angular-eslint/sort-ngmodule-metadata-arrays': 'error',
  '@angular-eslint/use-component-selector': 'error',
  // '@angular-eslint/use-component-view-encapsulation': 'error',
  '@angular-eslint/use-injectable-provided-in': 'error',
};

export default {
  ...overrideRules,
  ...angularRules,
};
