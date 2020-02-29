import React from 'react';
import styled from 'styled-components';

function Text({ children, as, color, align }) {
  const Element = as || 'p';

  const StyledElement = styled(Element)`
    text-align: ${align || 'inherit'};
    color: ${({ theme }) => theme.palette[color || 'primary'].main};
  `;

  return <StyledElement>{children}</StyledElement>;
}

export default Text;
