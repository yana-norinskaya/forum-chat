import {ChangeEvent, FC} from "react";
import styled, {css} from "styled-components";

export const InputStyle = styled.textarea(({theme}) => css`
    width: 500px;
    height: 100px;
    border-radius: 10px;
    border: 1px solid ${theme.colors.primary};
    padding: 10px;
    text-align: start;
    resize: none;
    &::placeholder{
      color: ${theme.colors.grey};
    },
    &::focus-visible{
      border: 3px solid ${theme.colors.primary};
    }
`
)

interface InputProps {
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string;
    placeholder?: string;
}

export const Input: FC<InputProps> =
    ({
         onChange,
         value,
         placeholder= "Add comments"}) => {
    return(
        <InputStyle onChange={onChange} value={value} placeholder={placeholder}/>
    )
}