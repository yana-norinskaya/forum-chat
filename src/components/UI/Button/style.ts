import styled from "styled-components";
import {Variant} from "./index";

export interface IButtonStyle {
    variant: Variant
}

export const ButtonStyle = styled.div<IButtonStyle>(({theme, variant}) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: theme.sizes.xs,
    color: theme.colors[variant],
    alignItems: "center",
    cursor: "pointer",
    fontSize: theme.fontSize.s,
    fontWeight: theme.fontWeight.m,
}))