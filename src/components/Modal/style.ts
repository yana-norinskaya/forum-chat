import styled, {css} from "styled-components";

export const ModalStyle = styled.div(({theme}) => ({
    background: theme.colors.bgModal,
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    overflow: "hidden"
}))

export const ModalBox = styled.div(({theme}) => css`
          width: 400px;
          background: white;
          margin: 200px auto;
          padding: ${theme.sizes.l};
          border-radius: 10px;
          p:nth-of-type(1){
            font-weight: ${theme.fontWeight.m};
            font-size: ${theme.fontSize.l};
            color: ${theme.colors.dark};
          }
        p:nth-of-type(2){
          padding: ${theme.sizes.s} 0;
          font-size: ${theme.fontSize.m};
          color: ${theme.colors.grey};
        }
`
)