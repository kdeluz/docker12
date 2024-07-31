import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  background-color: ${(props) => (props.disabled ? 'grey' : props.bgColor || 'blue')};
  color: white;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Button: React.FC<ButtonProps> = ({ children, bgColor, disabled }) => {
  return (
    <StyledButton bgColor={bgColor} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
