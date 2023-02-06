import angularRules from './rules/angular';
import cypressRules from './rules/cypress';
import jsRules from './rules/js';
import nextRules from './rules/next';
import prettierRules from './rules/prettier';
import reactRules from './rules/react';
import storybookRules from './rules/storybook';
import tsRules from './rules/ts';
import tsWithTypeInformationRules from './rules/tsWithTypeInformation';
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

const tsOverride = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  files: ['*.ts?(x)'],
  parser: '@typescript-eslint/parser',
  parserOptions,
  plugins: ['@typescript-eslint'],
  rules: {
    ...tsRules,
    ...prettierRules,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '.',
      },
    },
  },
};

const storybookOverride = {
  files: [
    '*.stories.@(ts|tsx|js|jsx|mjs|cjs)',
    '*.story.@(ts|tsx|js|jsx|mjs|cjs)',
  ],
  rules: storybookRules,
};

const cypressOverride = {
  files: ['*.cy.@(ts|tsx|js|jsx|mjs|cjs)'],
  rules: cypressRules,
};

export const configs = {
  angular: {
    ignorePatterns: ['projects/**/*'],
    overrides: [
      {
        ...tsOverride,
        extends: [
          'plugin:smile/js',
          'plugin:@typescript-eslint/recommended',
          'plugin:@angular-eslint/recommended',
          'plugin:@angular-eslint/recommended--extra',
          'plugin:@angular-eslint/template/process-inline-templates',
          'plugin:prettier/recommended',
        ],
        rules: {
          ...tsRules,
          ...angularRules,
          ...prettierRules,
        },
      },
      {
        extends: [
          'plugin:@angular-eslint/template/recommended',
          'plugin:prettier/recommended',
        ],
        files: ['*.html'],
        rules: {},
      },
      storybookOverride,
      cypressOverride,
    ],
  },
  js: {
    env,
    extends: [
      'plugin:import/recommended',
      'eslint:recommended',
      'plugin:storybook/recommended',
      'plugin:storybook/csf',
      'plugin:cypress/recommended',
      'plugin:prettier/recommended',
    ],
    overrides: [tsOverride, storybookOverride, cypressOverride],
    parserOptions,
    plugins: ['import'],
    rules: {
      ...jsRules,
      ...prettierRules,
    },
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
    overrides: [tsOverride, storybookOverride, cypressOverride],
    rules: {
      ...nextRules,
      ...prettierRules,
    },
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
    overrides: [tsOverride, storybookOverride, cypressOverride],
    parserOptions,
    plugins: ['jsx-a11y', 'react', 'react-hooks'],
    rules: {
      ...reactRules,
      ...prettierRules,
    },
  },
  ts: {
    overrides: [
      {
        ...tsOverride,
        extends: tsOverride.extends.concat([
          'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ]),
        rules: {
          ...tsRules,
          ...tsWithTypeInformationRules,
          ...prettierRules,
        },
      },
      storybookOverride,
      cypressOverride,
    ],
    parserOptions: {
      project: ['./tsconfig.json', './tsconfig.config.json'],
    },
  },
  vue: {
    env,
    extends: [
      'plugin:smile/js',
      'plugin:vue/vue3-essential',
      'plugin:prettier/recommended',
    ],
    overrides: [storybookOverride, cypressOverride],
    parserOptions,
    plugins: ['vue'],
    rules: {
      ...vueRules,
      ...prettierRules,
    },
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
          ...prettierRules,
          // following rules does not work without type informations in vue
          '@typescript-eslint/naming-convention': 'off',
          '@typescript-eslint/prefer-optional-chain': 'off',
        },
      },
      storybookOverride,
      cypressOverride,
    ],
    parserOptions: vueParserOptions,
    plugins: ['vue'],
    rules: {
      ...vueRules,
      ...prettierRules,
    },
  },
};
