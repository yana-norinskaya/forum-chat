import styled from "styled-components";

export enum FlexValue {
    stretch = "stretch",
    column = "column",
    start = "flex-start"
}
interface IFlex {
    cursor?: string;
    direction?: FlexValue;
    align?: FlexValue;
    justify?: FlexValue;
    width?: string
}
export const Flex = styled.div<IFlex>`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "space-between"};
  width: ${({width}) => width};
`;