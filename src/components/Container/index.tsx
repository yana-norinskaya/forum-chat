import {FC, ReactNode} from "react";
import {ContainerStyle} from "./style";

interface IContainer{
    children: ReactNode
}
export const Container: FC<IContainer> = ({children}) => {
    return(
        <ContainerStyle>
            {children}
        </ContainerStyle>
    )
}