import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.span<TextProps>`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.color || 'black'};
`;

const Text: React.FC<TextProps> = ({ children, color, fontSize }) => {
  return (
    <StyledText color={color} fontSize={fontSize}>
      {children}
    </StyledText>
  );
};

export default Text;
