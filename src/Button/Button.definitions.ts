import { ComponentPropsWithoutRef } from "react";

export interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'icon';
  elevation?: number;
}
