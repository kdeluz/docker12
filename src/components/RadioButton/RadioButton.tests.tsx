import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders RadioButton component', () => {
  render(<RadioButton label="Radio Button" name="example" value="example1" />);
  const radioButtonElement = screen.getByLabelText(/Radio Button/i);
  expect(radioButtonElement).toBeInTheDocument();
});

test('RadioButton is disabled', () => {
  render(<RadioButton label="Radio Button" name="example" value="example1" disabled />);
  const radioButtonElement = screen.getByLabelText(/Radio Button/i);
  expect(radioButtonElement).toBeDisabled();
  fireEvent.click(radioButtonElement);
  expect(radioButtonElement).not.toBeChecked();
});
