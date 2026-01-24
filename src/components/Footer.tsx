import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 0 40px 32px;
  text-align: right;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <small>©2026 LimHanGil. All Rights Reserved.</small>
    </StyledFooter>
  );
}
