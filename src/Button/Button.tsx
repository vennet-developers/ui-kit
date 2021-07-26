import React, { FC, ComponentPropsWithoutRef } from 'react';
import { StyledButton } from './Button.styled';

export interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'icon';
  elevation?: number;
}

export const Button: FC<IButtonProps> = ({
  variant = 'primary',
  elevation = 1.5,
  children,
  ...props
}) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
