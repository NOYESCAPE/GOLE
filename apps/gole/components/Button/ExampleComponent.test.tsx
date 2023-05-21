import { render } from '@testing-library/react';
import * as stories from './ExampleComponent.stories';
import { composeStories } from '@storybook/react';

const { Info, Danger, Congrats, Documentation } = composeStories(stories);

test('renders info banner with default args', () => {
  const { getByText } = render(<Info />);
  expect(getByText('정보')).toHaveStyle(
    'background-color: rgba(224, 226, 255, 0.5)'
  );
});
