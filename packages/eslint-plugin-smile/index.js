import jsRules from './rules/js';
import nextRules from './rules/next';
import reactRules from './rules/react';
import vueRules from './rules/vue';

const env = {
  browser: true,
  es2022: true,
  jest: true,
  node: true,
};

const parserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
};

export const configs = {
  js: {
    env,
    extends: [
      'plugin:import/recommended',
      'eslint:recommended',
      'plugin:prettier/recommended',
    ],
    parserOptions,
    plugins: ['import'],
    rules: jsRules,
  },
  next: {
    extends: [
      'plugin:smile/react',
      'next/core-web-vitals',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
    ],
    rules: nextRules,
  },
  react: {
    env,
    extends: [
      'react-app',
      'react-app/jest',
      'plugin:smile/js',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/jsx-runtime',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ...parserOptions,
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['jsx-a11y', 'react', 'react-hooks'],
    rules: reactRules,
  },
  vue: {
    env,
    extends: [
      'plugin:smile/js',
      'plugin:vue/vue3-essential',
      'plugin:prettier/recommended',
    ],
    parserOptions,
    plugins: ['vue'],
    rules: vueRules,
  },
};
