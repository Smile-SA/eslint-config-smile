const overrideRules = {
  'no-invalid-this': 'off',
  'no-unused-expressions': 'off',
};

const cypressRules = {
  // 'cypress/assertion-before-screenshot': 'error',
  'cypress/no-force': 'error',
  'cypress/no-pause': 'error',
  'cypress/require-data-selectors': 'error',
};

export default {
  ...overrideRules,
  ...cypressRules,
};
