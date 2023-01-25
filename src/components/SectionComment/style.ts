import styled from "styled-components";
import {Width} from "./index";

interface ISection{
    width: Width
}

export const Section = styled.div<ISection>(({theme, width}) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    borderRadius: "10px",
    padding: theme.sizes.s,
    background: "white",
    margin: "20px 0",
    width: width
}))