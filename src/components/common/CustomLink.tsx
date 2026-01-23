import styled from 'styled-components';
import type {
  CustomLinkProps,
  CustomLinkSize,
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

const buttonSize = {
  lg: '18px',
  base: '16px',
};

export const StyledLink = styled.a<{
  $variant: CustomLinkVariant;
  $size: CustomLinkSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  padding: 10px 20px;
  border: 1px solid ${({ $variant }) => variantStyles[$variant].border};
  border-radius: 8px;
  font-size: ${({ $size }) => buttonSize[$size]};
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
  const { children, variant, size, href } = props;
  return (
    <StyledLink
      $variant={variant}
      $size={size}
      href={href}
      target="_blank"
      title="새창열림으로 바로가기"
    >
      {children}
    </StyledLink>
  );
}
