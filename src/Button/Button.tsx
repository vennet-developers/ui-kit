import React, { FC } from 'react';
import { IButtonProps } from './Button.definitions';
import './Button.scss';

const Button: FC<IButtonProps> = ({
  variant = 'primary',
  elevation = 1.5,
  children,
  ...props
}) => {
  return (
    <button className={`vennet-button ${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
