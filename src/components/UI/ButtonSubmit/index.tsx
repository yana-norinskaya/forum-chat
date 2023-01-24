import {FC, FormEvent} from "react";
import styled from "styled-components";

export const ButtonSubmitStyle = styled.button(({theme}) => ({
    width: "100px",
    background: theme.colors.primary,
    color: "white",
    fontWeight: theme.fontWeight.m,
    padding: theme.sizes.s,
    borderRadius: "10px",
    fontSize: theme.fontSize.m,
    textTransform: "uppercase"
}))

interface IButtonSubmit{
    title: string;
    onClick?: () => void;
}

export const ButtonSubmit: FC<IButtonSubmit> = ({title, onClick}) => {
    return(
        <ButtonSubmitStyle onClick={onClick}>{title}</ButtonSubmitStyle>
    )
}