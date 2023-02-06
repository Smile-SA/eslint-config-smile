const overrideRules = {
  'default-param-last': 'off',
  'no-array-constructor': 'off',
  'no-dupe-class-members': 'off',
  'no-duplicate-imports': 'off',
  'no-invalid-this': 'off',
  'no-loop-func': 'off',
  'no-redeclare': 'off',
  'no-unused-expressions': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
};

// @see https://typescript-eslint.io/rules/#supported-rules
const supportedRules = {
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/ban-tslint-comment': 'error',
  '@typescript-eslint/class-literal-property-style': 'error',
  '@typescript-eslint/consistent-generic-constructors': 'error',
  '@typescript-eslint/consistent-indexed-object-style': 'error',
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/consistent-type-definitions': 'error',
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      allowDirectConstAssertionInArrowFunctions: true,
      allowExpressions: true,
      allowHigherOrderFunctions: true,
      allowTypedFunctionExpressions: true,
    },
  ],
  // '@typescript-eslint/explicit-member-accessibility': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  // '@typescript-eslint/member-delimiter-style': 'error', // Formatting
  '@typescript-eslint/member-ordering': [
    'error',
    {
      default: {
        order: 'alphabetically',
      },
    },
  ],
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  // '@typescript-eslint/no-parameter-properties': 'error', // Deprecated
  '@typescript-eslint/no-require-imports': 'error',
  // '@typescript-eslint/no-type-alias': 'error',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'after-used',
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      ignoreRestSiblings: true,
      varsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/no-useless-empty-export': 'error',
  // '@typescript-eslint/parameter-properties': 'error',
  // '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/sort-type-constituents': 'error',
  // '@typescript-eslint/sort-type-union-intersection-members': 'error', // Deprecated
  // '@typescript-eslint/type-annotation-spacing': 'error', // Formatting
  // '@typescript-eslint/typedef': 'error',
  '@typescript-eslint/unified-signatures': 'error',
};

export const specialVueRules = {
  '@typescript-eslint/naming-convention': [
    'error',
    {
      format: ['camelCase'],
      leadingUnderscore: 'forbid',
      selector: 'default',
      trailingUnderscore: 'forbid',
    },
    {
      format: ['camelCase', 'StrictPascalCase'],
      leadingUnderscore: 'allow',
      selector: 'variableLike',
      trailingUnderscore: 'forbid',
    },
    {
      format: ['strictCamelCase', 'UPPER_CASE'],
      leadingUnderscore: 'forbid',
      modifiers: ['global', 'exported'],
      selector: 'variable',
      trailingUnderscore: 'forbid',
    },
    {
      format: ['StrictPascalCase'],
      leadingUnderscore: 'forbid',
      selector: 'class',
      trailingUnderscore: 'forbid',
    },
    {
      format: ['strictCamelCase', 'StrictPascalCase'],
      leadingUnderscore: 'forbid',
      selector: 'function',
      trailingUnderscore: 'forbid',
    },
    {
      format: null,
      leadingUnderscore: 'forbid',
      selector: 'objectLiteralProperty',
      trailingUnderscore: 'forbid',
    },
    {
      format: ['StrictPascalCase'],
      leadingUnderscore: 'forbid',
      selector: 'typeLike',
      trailingUnderscore: 'forbid',
    },
    {
      format: ['StrictPascalCase'],
      leadingUnderscore: 'forbid',
      prefix: ['I'],
      selector: 'interface',
      trailingUnderscore: 'forbid',
    },
  ],
  '@typescript-eslint/prefer-optional-chain': 'error',
};

// @see https://typescript-eslint.io/rules/#extension-rules
const extensionRules = {
  // '@typescript-eslint/brace-style': 'error', // Formatting
  // '@typescript-eslint/comma-dangle': 'error', // Formatting
  // '@typescript-eslint/comma-spacing': 'error', // Formatting
  '@typescript-eslint/default-param-last': 'error',
  // '@typescript-eslint/func-call-spacing': 'error', // Formatting
  // '@typescript-eslint/indent': 'error', // Formatting
  // '@typescript-eslint/init-declarations': 'error',
  // '@typescript-eslint/key-spacing': 'error', // Formatting
  // '@typescript-eslint/keyword-spacing': 'error', // Formatting
  // '@typescript-eslint/lines-between-class-members': 'error', // Formatting
  '@typescript-eslint/no-dupe-class-members': 'error',
  // '@typescript-eslint/no-duplicate-imports': 'error', // Deprecated
  // '@typescript-eslint/no-extra-parens': 'error', // Formatting
  '@typescript-eslint/no-invalid-this': 'error',
  '@typescript-eslint/no-loop-func': 'error',
  // '@typescript-eslint/no-magic-numbers': 'error',
  '@typescript-eslint/no-redeclare': 'error',
  // '@typescript-eslint/no-restricted-imports': 'error',
  // '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true },
  ],
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/no-useless-constructor': 'error',
  // '@typescript-eslint/object-curly-spacing': 'error', // Formatting
  // '@typescript-eslint/padding-line-between-statements': 'error', // Formatting
  // '@typescript-eslint/quotes': 'error', // Formatting
  // '@typescript-eslint/semi': 'error', // Formatting
  // '@typescript-eslint/space-before-blocks': 'error', // Formatting
  // '@typescript-eslint/space-before-function-paren': 'error', // Formatting
  // '@typescript-eslint/space-infix-ops': 'error', // Formatting
};

export default {
  ...overrideRules,
  ...supportedRules,
  ...specialVueRules,
  ...extensionRules,
};
