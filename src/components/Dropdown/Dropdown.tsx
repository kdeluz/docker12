import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

interface StyledSelectProps {
  disabled?: boolean;
}

const StyledSelect = styled.select<StyledSelectProps>`
  padding: 10px;
  border: 1px solid ${(props) => (props.disabled ? 'grey' : 'black')};
  background-color: ${(props) => (props.disabled ? '#f0f0f0' : 'white')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled }) => {
  return (
    <StyledSelect disabled={disabled}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
