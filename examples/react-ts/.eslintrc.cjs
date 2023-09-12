module.exports = {
  extends: ['plugin:smile/react', 'plugin:smile/ts'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  root: true,
};
