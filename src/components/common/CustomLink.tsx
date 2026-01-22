import styled from 'styled-components';
import type {
  CustomLinkProps,
  CustomLinkVariant,
} from '../../types/customLink';

const variantStyles = {
  primary: {
    bg: 'var(--color-primary)',
    hoverBg: 'var(--color-primary-hover)',
    color: 'var(--color-midnight)',
    hoverColor: 'var(--color-midnight)',
    border: 'var(--color-primary)',
  },
  secondary: {
    bg: 'var(--color-secondary)',
    hoverBg: 'var(--color-secondary-hover)',
    color: 'var(--color-white)',
    hoverColor: 'var(--color-white)',
    border: 'var(--color-secondary)',
  },
  gray: {
    bg: 'var(--color-dark-gray)',
    hoverBg: 'var(--color-dark-gray-hover)',
    color: 'var(--color-white)',
    hoverColor: 'var(--color-white)',
    border: 'var(--color-dark-gray)',
  },
  outline: {
    bg: 'transparent',
    hoverBg: 'var(--color-white)',
    color: 'var(--color-white)',
    hoverColor: 'var(--color-midnight)',
    border: 'var(--color-white)',
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
