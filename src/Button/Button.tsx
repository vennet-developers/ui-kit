import React, { FC, ComponentPropsWithoutRef } from 'react';
import { StyledButton } from "./Button.styled";

export interface IButtonProps extends ComponentPropsWithoutRef<'button'> {

}

const Button: FC<IButtonProps> = ({ children, style, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button;
