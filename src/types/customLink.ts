export type CustomLinkVariant = 'primary' | 'secondary' | 'gray' | 'outline';

export interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  variant: CustomLinkVariant;
}
