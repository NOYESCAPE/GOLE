import type { Meta, StoryObj } from '@storybook/react';

import IconBox from './IconBox';
import { MouseEvent } from 'react';

const meta: Meta<typeof IconBox> = {
  title: 'IconBox',
  component: IconBox
};

export default meta;

type Story = StoryObj<typeof IconBox>;

export const Index: Story = {
  render: ({ spaceBetween, icons }) => {
    const handleClickIcon = (e: MouseEvent<HTMLButtonElement>) =>
      console.log(e.currentTarget.dataset.icon);

    return (
      <IconBox
        spaceBetween={spaceBetween}
        icons={icons}
        onClickIcon={handleClickIcon}
      />
    );
  },
  args: {
    spaceBetween: '6px',
    icons: ['back', 'setting']
  }
};
