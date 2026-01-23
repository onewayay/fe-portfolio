export type CustomLinkVariant = 'primary' | 'secondary' | 'gray' | 'outline';

export type CustomLinkSize = 'lg' | 'base';

export interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  variant: CustomLinkVariant;
  size: CustomLinkSize;
}
