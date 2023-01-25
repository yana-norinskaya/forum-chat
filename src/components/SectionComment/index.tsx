import {FC, ReactNode} from "react";

import {Section} from "./style";

export enum Width {
    reply = "600px",
    message = "100%"
}

interface ISectionMain{
    width?: Width;
    children: ReactNode;
}

export const SectionComment: FC<ISectionMain> =
    ({
         width = Width.message,
         children
    }) => {

    return(
        <Section width={width}>
            {children}
        </Section>
    )
}