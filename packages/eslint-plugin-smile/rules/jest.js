const jestRules = {
  'jest/consistent-test-it': 'error',
  'jest/expect-expect': 'error',
  'jest/max-nested-describe': ['error', { max: 3 }],
  'jest/no-commented-out-tests': 'error',
  'jest/no-disabled-tests': 'error',
  'jest/no-duplicate-hooks': 'error',
  'jest/no-test-return-statement': 'error',
  'jest/prefer-hooks-in-order': 'error',
  'jest/prefer-hooks-on-top': 'error',
  'jest/prefer-lowercase-title': [
    'error',
    {
      ignore: ['describe', 'test'],
    },
  ],
  'jest/prefer-spy-on': 'error',
  'jest/prefer-todo': 'error',
  'jest/require-hook': 'error',
  'jest/require-top-level-describe': [
    'error',
    {
      maxNumberOfTopLevelDescribes: 1,
    },
  ],
};

const testingLibraryRules = {
  'testing-library/no-debugging-utils': 'error',
};

export default {
  ...jestRules,
  ...testingLibraryRules,
};
