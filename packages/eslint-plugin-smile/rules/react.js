const overrideRules = {
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
      enforceForJSX: true,
    },
  ],
  // "no-unused-vars": [
  //   "error",
  //   {
  //     argsIgnorePattern: "^_",
  //     caughtErrorsIgnorePattern: "^_",
  //     ignoreRestSiblings: true,
  //     varsIgnorePattern: "^(React|_)",
  //   },
  // ],
};

// @see https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
const reactRules = {
  'react/boolean-prop-naming': 'error',
  'react/button-has-type': 'error',
  'react/default-props-match-prop-types': 'error',
  'react/destructuring-assignment': ['error', 'always'],
  // 'react/forbid-component-props': 'error',
  // 'react/forbid-dom-props': 'error',
  // 'react/forbid-elements': 'error',
  // 'react/forbid-foreign-prop-types': 'error',
  // 'react/forbid-prop-types': 'error',
  'react/function-component-definition': [
    'error',
    { namedComponents: 'function-declaration' },
  ],
  'react/hook-use-state': 'error',
  'react/iframe-missing-sandbox': 'error',
  'react/jsx-boolean-value': 'error',
  'react/jsx-child-element-spacing': 'error', // formatting
  'react/jsx-closing-bracket-location': 'error', // formatting
  'react/jsx-closing-tag-location': 'error', // formatting
  'react/jsx-curly-brace-presence': [
    'error',
    { children: 'never', propElementValues: 'always', props: 'never' },
  ],
  'react/jsx-curly-newline': 'error', // formatting
  'react/jsx-curly-spacing': 'error', // formatting
  'react/jsx-equals-spacing': ['error', 'never'],
  'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
  'react/jsx-first-prop-new-line': 'error', // formatting
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-handler-names': ['error', { checkLocalVariables: true }],
  // 'react/jsx-indent': 'error', // formatting - useless when prettier is enabled
  // 'react/jsx-indent-props': 'error', // formatting - useless when prettier is enabled
  'react/jsx-key': ['error', { warnOnDuplicates: true }],
  // 'react/jsx-max-depth': 'error',
  // 'react/jsx-max-props-per-line': 'error',
  // 'react/jsx-newline': 'error', // formatting
  'react/jsx-no-bind': [
    'error',
    { allowArrowFunctions: true, allowFunctions: true },
  ],
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-leaked-render': 'error',
  // 'react/jsx-no-literals': 'error',
  'react/jsx-no-script-url': 'error',
  'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
  // 'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }], // formatting
  'react/jsx-pascal-case': 'error',
  // 'react/jsx-props-no-multi-spaces': 'error', // formatting - useless when prettier is enabled
  // 'react/jsx-props-no-spreading': 'error',
  'react/jsx-sort-props': ['error', { reservedFirst: true }],
  // 'react/jsx-tag-spacing': 'error', // formatting - useless when prettier is enabled
  // 'react/jsx-wrap-multilines': 'error', // formatting - useless when prettier is enabled
  'react/no-access-state-in-setstate': 'error',
  // 'react/no-adjacent-inline-elements': 'error',
  'react/no-array-index-key': 'error',
  'react/no-arrow-function-lifecycle': 'error',
  'react/no-danger': 'error',
  'react/no-did-mount-set-state': 'error', // class
  'react/no-did-update-set-state': 'error', // class
  'react/no-invalid-html-attribute': 'error',
  'react/no-multi-comp': 'error',
  'react/no-namespace': 'error',
  'react/no-object-type-as-default-prop': 'error',
  'react/no-redundant-should-component-update': 'error',
  // 'react/no-set-state': 'error',
  'react/no-this-in-sfc': 'error',
  'react/no-typos': 'error',
  'react/no-unsafe': 'error',
  'react/no-unstable-nested-components': 'error',
  'react/no-unused-class-component-methods': 'error', // class
  'react/no-unused-prop-types': 'error',
  'react/no-unused-state': 'error', // class
  'react/no-will-update-set-state': 'error', // class
  'react/prefer-es6-class': 'error', // class
  // 'react/prefer-exact-props': 'error', // flow
  // 'react/prefer-read-only-props': 'error', // flow
  'react/prefer-stateless-function': 'error',
  'react/prop-types': ['error', { ignore: ['children'] }],
  // 'react/require-default-props': 'error',
  // 'react/require-optimization': 'error',
  'react/self-closing-comp': 'error',
  'react/sort-comp': 'error', // class
  'react/sort-default-props': 'error',
  'react/sort-prop-types': 'error',
  // 'react/state-in-constructor': 'error',
  'react/static-property-placement': 'error', // class
  'react/style-prop-object': 'error',
  'react/void-dom-elements-no-children': 'error',
};

// @see https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
const reactHooksRules = {
  'react-hooks/exhaustive-deps': 'error',
};

// @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules
const jsxA11yRules = {
  'jsx-a11y/lang': 'error',
  'jsx-a11y/no-aria-hidden-on-focusable': 'error',
  // 'jsx-a11y/prefer-tag-over-role': 'error',
};

export default {
  ...overrideRules,
  ...reactRules,
  ...reactHooksRules,
  ...jsxA11yRules,
};
