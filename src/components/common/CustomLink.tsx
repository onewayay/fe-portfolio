import styled from 'styled-components';
import type {
  CustomLinkProps,
  CustomLinkVariant,
} from '../../types/customLink';

const variantStyles = {
  primary: {
    bg: '#2ed3b7',
    hoverBg: '#26b9a1',
    color: '#212832',
    hoverColor: '#212832',
    border: '#2ed3b7',
  },
  secondary: {
    bg: '#4da3ff',
    hoverBg: '#3a8deb',
    color: '#ffffff',
    hoverColor: '#ffffff',
    border: '#4da3ff',
  },
  gray: {
    bg: '#333333',
    hoverBg: '#444444',
    color: '#ffffff',
    hoverColor: '#ffffff',
    border: '#333333',
  },
  outline: {
    bg: 'transparent',
    hoverBg: '#ffffff',
    color: '#ffffff',
    hoverColor: '#212832',
    border: '#ffffff',
  },
};

export const StyledLink = styled.a<{
  $variant: CustomLinkVariant;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  padding: 10px 20px;
  border: 1px solid ${({ $variant }) => variantStyles[$variant].border};
  border-radius: 8px;
  background-color: ${({ $variant }) => variantStyles[$variant].bg};
  color: ${({ $variant }) => variantStyles[$variant].color};
  transition: 0.3s;

  &:hover {
    border: 1px solid ${({ $variant }) => variantStyles[$variant].hoverBg};
    background-color: ${({ $variant }) => variantStyles[$variant].hoverBg};
    color: ${({ $variant }) => variantStyles[$variant].hoverColor};
  }
`;

export default function CustomLink(props: CustomLinkProps) {
  const { children, variant, href } = props;
  return (
    <StyledLink $variant={variant} href={href}>
      {children}
    </StyledLink>
  );
}
