import styled from "styled-components";

export const ScoreStyle = styled.div(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    width: "30px",
    padding: theme.sizes.xs,
    color: theme.colors.primary,
    height: "70px",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: theme.fontWeight.m,
    background: theme.colors.bg,
    borderRadius: "10px"
}))