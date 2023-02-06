import { createHeader } from './Header';

export default {
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    onCreateAccount: { action: 'onCreateAccount' },
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
  title: 'Example/Header',
};

const Template = (args) => createHeader(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
