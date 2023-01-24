import {FC, ReactNode} from "react";
import {SectionStyle} from "./style";

interface IContainer{
    children: ReactNode
}
export const Container: FC<IContainer> = ({children}) => {
    return(
        <SectionStyle>
            {children}
        </SectionStyle>
    )
}