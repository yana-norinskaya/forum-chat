import {FC} from "react";

import * as MaterialIcons from "react-icons/md";

import {TypeMaterialIconName} from "../../../interface/icon";

interface IMaterialIcon{
    icon: TypeMaterialIconName,
    color?: string,
    onClick?: () => void;
}

export const MaterialIcon: FC<IMaterialIcon> = ({icon, color, onClick}) => {
    const IconComponent = MaterialIcons[icon];

    return <IconComponent color={color} cursor="pointer" onClick={onClick}/>
}