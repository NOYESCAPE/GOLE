import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header
};

export default meta;

type Story = StoryObj<typeof Header>;

export const CategoryHeader: Story = {
  render: () => (
    <Header>
      <Header.LeftOption
        icons={['back', 'home_active']}
        onClickIcon={() => {
          //
        }}
      />
      <Header.MiddleText text="육아 · 교육" />
      <Header.RightOption
        icons={['search']}
        onClickIcon={() => {
          //
        }}
      />
    </Header>
  )
};
