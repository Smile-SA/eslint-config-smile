// @see https://github.com/nuxt/eslint-plugin-nuxt/tree/master
const nuxtRules = {
  'nuxt/no-cjs-in-config': 'error',
  'nuxt/no-env-in-context': 'error',
  'nuxt/no-env-in-hooks': 'error',
  'nuxt/no-globals-in-created': 'error',
  'nuxt/no-this-in-fetch-data': 'error',
  'nuxt/no-timing-in-fetch-data': 'error',
  'nuxt/require-func-head': 'error',
};

export default {
  ...nuxtRules,
};
