import React, { FC } from 'react';
import { IButtonProps } from './Button.definitions';
import { StyledButton } from './Button.styled';

const Button: FC<IButtonProps> = ({
  variant = 'primary',
  elevation = 1.5,
  children,
  ...props
}) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
