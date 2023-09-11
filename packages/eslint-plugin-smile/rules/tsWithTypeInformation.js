const overrideRules = {
  'dot-notation': 'off',
  'no-throw-literal': 'off',
  'return-await': 'off',
};

const supportedRules = {
  '@typescript-eslint/consistent-type-exports': 'error',
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
      format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
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
      selector: 'enumMember',
      trailingUnderscore: 'forbid',
    },
    {
      format: ['StrictPascalCase'],
      leadingUnderscore: 'forbid',
      prefix: ['I'],
      selector: 'typeAlias',
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
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    { ignoreArrowShorthand: true, ignoreVoidOperator: true },
  ],
  '@typescript-eslint/no-meaningless-void-operator': 'error',
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unnecessary-condition': 'error',
  // '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  // '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  // '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  // '@typescript-eslint/prefer-readonly-parameter-types': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  // '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/prefer-return-this-type': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  // '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/require-array-sort-compare': [
    'error',
    { ignoreStringArrays: true },
  ],
  // '@typescript-eslint/strict-boolean-expressions': 'error',
  // '@typescript-eslint/switch-exhaustiveness-check': 'error',
};

const specialVueRules = {};

const extensionRules = {
  '@typescript-eslint/dot-notation': 'error',
  '@typescript-eslint/no-throw-literal': 'error',
  '@typescript-eslint/return-await': 'error',
};

export default {
  ...overrideRules,
  ...supportedRules,
  ...specialVueRules,
  ...extensionRules,
};
