require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['plugin:smile/vue-ts', 'plugin:smile/ts'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json']
  },
  root: true
}
