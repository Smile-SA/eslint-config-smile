const overrideRules = {
  'import/no-unresolved': ['error', { ignore: ['^@/'] }],
  'jsx-a11y/alt-text': [
    'error',
    {
      elements: ['img', 'object', 'input[type="image"]', 'area'],
      img: ['Image'],
    },
  ],
  // 'jsx-a11y/anchor-is-valid': 'off',
};

// @see https://nextjs.org/docs/basic-features/eslint#eslint-plugin
const nextRules = {
  '@next/next/google-font-display': 'error',
  '@next/next/google-font-preconnect': 'error',
  '@next/next/next-script-for-ga': 'error',
  '@next/next/no-before-interactive-script-outside-document': 'error',
  '@next/next/no-css-tags': 'error',
  '@next/next/no-head-element': 'error',
  '@next/next/no-img-element': 'error',
  '@next/next/no-page-custom-font': 'error',
  '@next/next/no-styled-jsx-in-document': 'error',
  '@next/next/no-title-in-document-head': 'error',
  '@next/next/no-typos': 'error',
  '@next/next/no-unwanted-polyfillio': 'error',
};

export default {
  ...overrideRules,
  ...nextRules,
};
