import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.color || 'black'};
  display: block;
  margin-bottom: 8px;
`;

const Label: React.FC<LabelProps> = ({ children, color, fontSize }) => {
  return (
    <StyledLabel color={color} fontSize={fontSize}>
      {children}
    </StyledLabel>
  );
};

export default Label;
