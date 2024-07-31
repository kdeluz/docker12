import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders Text component', () => {
  render(<Text>This is a text component</Text>);
  const textElement = screen.getByText(/This is a text component/i);
  expect(textElement).toBeInTheDocument();
});

test('Text has correct color and font size', () => {
  render(<Text color="red" fontSize="20px">This is a text component</Text>);
  const textElement = screen.getByText(/This is a text component/i);
  expect(textElement).toHaveStyle('color: red');
  expect(textElement).toHaveStyle('font-size: 20px');
});
