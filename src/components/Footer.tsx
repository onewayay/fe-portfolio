import styled from 'styled-components';

export default function Footer() {
  const StyledFooter = styled.footer`
    padding: 0 40px 32px;
    text-align: right;
  `;

  return (
    <StyledFooter>
      <small>©2026 LimHanGil. All Rights Reserved.</small>
    </StyledFooter>
  );
}
