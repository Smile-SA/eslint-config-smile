import type { IButtonProps } from './Button';
import type { Meta, Story } from '@storybook/html';

import { createButton } from './Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  title: 'Example/Button',
} as Meta;

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template: Story<IButtonProps> = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton(args);
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  label: 'Button',
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'small',
};
