import type { Meta, StoryObj } from '@storybook/react';

import ExampleComponent from './ExampleComponent';

const meta: Meta<typeof ExampleComponent> = {
  title: 'ExampleComponent',
  component: ExampleComponent
};

export default meta;

type Story = StoryObj<typeof ExampleComponent>;

export const Info: Story = {
  render: () => <ExampleComponent variant="info">정보</ExampleComponent>
};

export const Danger: Story = {
  render: () => <ExampleComponent variant="danger">경고</ExampleComponent>
};

export const Congrats: Story = {
  render: () => <ExampleComponent variant="congrats">축하</ExampleComponent>
};

export const Documentation: Story = {
  render: () => (
    <ExampleComponent variant="documentation">문서</ExampleComponent>
  )
};
