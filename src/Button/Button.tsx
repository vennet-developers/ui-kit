import React, { FC, ComponentPropsWithoutRef } from 'react';
import { StyledButton } from './Button.styled';

export interface IButtonProps extends ComponentPropsWithoutRef<'button'> {}

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
