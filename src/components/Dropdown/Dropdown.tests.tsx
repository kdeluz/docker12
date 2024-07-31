import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

test('renders Dropdown component', () => {
  render(<Dropdown options={options} />);
  const dropdownElement = screen.getByRole('combobox');
  expect(dropdownElement).toBeInTheDocument();
});

test('Dropdown is disabled', () => {
  render(<Dropdown options={options} disabled />);
  const dropdownElement = screen.getByRole('combobox');
  expect(dropdownElement).toBeDisabled();
  expect(dropdownElement).toHaveStyle('background-color: #f0f0f0');
});
