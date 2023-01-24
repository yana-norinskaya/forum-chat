import styled, {css} from "styled-components";

export const UserStyle = styled.div(({theme}) => css`
  display: flex;
  min-width: 200px;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.fontWeight.m};
  img{
    width: 34px;
    height: 34px;
    border-radius: 10px;
    display: block;
  }
`
)