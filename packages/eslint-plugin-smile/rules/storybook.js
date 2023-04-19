const overrideRules = {
  'import/no-anonymous-default-export': 'off',
  'react/function-component-definition': 'off',
  'react/no-multi-comp': 'off',
};

const storybookRules = {
  'storybook/csf-component': 'error',
  'storybook/hierarchy-separator': 'error',
  'storybook/no-redundant-story-name': 'error',
  'storybook/no-stories-of': 'error',
  'storybook/prefer-pascal-case': 'error',
};

export default {
  ...overrideRules,
  ...storybookRules,
};
