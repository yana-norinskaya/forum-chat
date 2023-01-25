import {FC} from "react";
import styled, {css} from "styled-components";

export enum Colors{
    grey = "grey",
    warning = "warning",
    primary = "primary"
}

interface IButton{
    width?: string
    color: Colors
}

export const ButtonSubmitStyle = styled.button<IButton>(({theme, width = "100px", color}) => css`
  width: ${width};
  background: ${theme.colors.primary};
  color: white;
  font-weight: ${theme.fontWeight.m};
  padding: ${theme.sizes.s};
  border-radius: 10px;
  font-size: ${theme.fontSize.m};
  text-transform: uppercase;
  background-color: ${theme.colors[color]};
  transition: ${theme.animation.transition};
  &:hover{
    opacity: ${theme.animation.opacity};
  }
`
)

interface IButtonSubmit{
    title: string;
    onClick?: () => void;
    width?: string,
    color?: Colors
}

export const ButtonSubmit: FC<IButtonSubmit> =
    ({
         title,
         onClick,
         width,
         color = Colors.primary}) => {
    return(
        <ButtonSubmitStyle
            onClick={onClick}
            width={width}
            color={color}>{title}</ButtonSubmitStyle>
    )
}