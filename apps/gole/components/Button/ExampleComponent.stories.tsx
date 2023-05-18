import type { Meta, StoryObj } from '@storybook/react';

import ExampleComponent from './ExampleComponent';

const meta: Meta<typeof ExampleComponent> = {
  title: 'ExampleComponent',
  component: ExampleComponent
};

export default meta;

type Story = StoryObj<typeof ExampleComponent>;

export const Info: Story = {
  render: () => <ExampleComponent variant="info">배너</ExampleComponent>
};
