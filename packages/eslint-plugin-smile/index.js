import jsRules from './rules/js';
import nextRules from './rules/next';
import reactRules from './rules/react';
import tsRules from './rules/ts';
import vueRules from './rules/vue';

const env = {
  browser: true,
  es2022: true,
  jest: true,
  node: true,
};

const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 'latest',
  sourceType: 'module',
  warnOnUnsupportedTypeScriptVersion: true,
};

const vueParserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 'latest',
  extraFileExtensions: ['.vue'],
  parser: {
    js: 'espree',
    jsx: 'espree',
    ts: require.resolve('@typescript-eslint/parser'),
    tsx: require.resolve('@typescript-eslint/parser'),
  },
  sourceType: 'module',
  warnOnUnsupportedTypeScriptVersion: true,
};

const extensions = ['.js', '.jsx', '.mjs', '.cjs', '.vue'];

export const configs = {
  js: {
    env,
    extends: [
      'plugin:import/recommended',
      'eslint:recommended',
      'plugin:prettier/recommended',
    ],
    overrides: [
      {
        extends: [
          'plugin:prettier/recommended',
          'plugin:@typescript-eslint/recommended',
        ],
        files: ['*.ts?(x)'],
        parser: '@typescript-eslint/parser',
        parserOptions,
        plugins: ['@typescript-eslint'],
        rules: tsRules,
        settings: {
          'import/resolver': {
            node: {
              extensions: extensions.concat(['.ts', '.tsx']),
            },
          },
        },
      },
    ],
    parserOptions,
    plugins: ['import'],
    rules: jsRules,
    settings: {
      'import/resolver': {
        node: {
          extensions,
        },
      },
    },
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
    parserOptions,
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
  'vue-ts': {
    env,
    extends: [
      '@vue/eslint-config-typescript',
      'plugin:smile/js',
      'plugin:vue/vue3-essential',
      'plugin:prettier/recommended',
    ],
    overrides: [
      {
        extends: [
          'plugin:prettier/recommended',
          'plugin:@typescript-eslint/recommended',
        ],
        files: ['*.ts', '*.tsx', '*.vue'],
        parser: 'vue-eslint-parser',
        parserOptions: vueParserOptions,
        plugins: ['@typescript-eslint'],
        rules: {
          ...tsRules,
          // following rules does not work without type informations in vue
          '@typescript-eslint/naming-convention': 'off',
          '@typescript-eslint/prefer-optional-chain': 'off',
        },
      },
    ],
    parserOptions: vueParserOptions,
    plugins: ['vue'],
    rules: vueRules,
  },
};
