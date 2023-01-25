import React, {FC} from "react";

import {TypeMaterialIconName} from "../../../interface/icon";

import {ButtonStyle} from "./style";

import {MaterialIcon} from "../MaterialIcon/MaterialIcon";

export enum Variant {
    primary = "primary",
    warning = "warning"
}

export interface IButton {
    title: string;
   icon: TypeMaterialIconName;
   variant?: Variant;
   onClick?: () => void;
}

export const Button: FC<IButton> = ({
     title,
     variant = Variant.primary,
     icon,
     onClick

}) => {
   return(
       <ButtonStyle variant={variant} onClick={onClick}>
           <MaterialIcon icon={icon}/>
                {title}
       </ButtonStyle>
   )
}