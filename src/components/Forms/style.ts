import styled from "styled-components";

interface IFormStyle {
    width?: string
}

export const FormComment = styled.form<IFormStyle>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: ${(props) => props.width || "100%"};
  
`

export const FormReply = styled.form<IFormStyle>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 160px;
  width: 100%;
`