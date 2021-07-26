import styled from 'styled-components';
import { IButtonProps } from './Button.definitions';

export const StyledButton = styled.button<IButtonProps>`
padding: 20px;
border: none;
border-radius: 5px;
background-color: #ccc;
color: black;
`;
