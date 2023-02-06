module.exports = {
  extends: ['plugin:smile/js'],
  root: true,
  rules: {
    'cypress/no-force': 'off',
    'cypress/no-unnecessary-waiting': 'off',
    'cypress/require-data-selectors': 'off',
  },
};
