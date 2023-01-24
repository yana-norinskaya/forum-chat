import styled, {css} from "styled-components";

export const Wrap = styled.div`
  width: 93%;
`
export const TextMessage = styled.p(({theme}) => css`
  font-size: ${theme.fontSize.m};
  color: ${theme.colors.grey};
  font-weight: ${theme.fontWeight.s};
  padding: 10px 0;
`)


export const RepliesSection = styled.div(({theme}) => css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  position: relative;
  &:after{
    content: "";
    width: 1px;
    opacity: 0.4;
    background: ${theme.colors.grey};
    height: 100%;
    top: 0;
    left: 100px;
    position: absolute;
  }
`)
