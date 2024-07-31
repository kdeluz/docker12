import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

interface StyledLabelProps {
  disabled?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  input {
    margin-right: 8px;
  }

  input:disabled {
    cursor: not-allowed;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, disabled, onChange }) => {
  return (
    <StyledLabel disabled={disabled}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
