import type { ReactNode } from 'react';
import styled from 'styled-components';

export const StyledLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  padding: 6px 10px;
  border: 1px solid #fff;
  border-radius: 6px;
`;

export default function Label({ children }: { children: ReactNode }) {
  return <StyledLabel>{children}</StyledLabel>;
}
