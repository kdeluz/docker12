import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders Label component', () => {
  render(<Label>Label</Label>);
  const labelElement = screen.getByText(/Label/i);
  expect(labelElement).toBeInTheDocument();
});

test('Label has correct color and font size', () => {
  render(<Label color="red" fontSize="20px">Label</Label>);
  const labelElement = screen.getByText(/Label/i);
  expect(labelElement).toHaveStyle('color: red');
  expect(labelElement).toHaveStyle('font-size: 20px');
});
