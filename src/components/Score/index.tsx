import {FC, useState} from "react";
import {ScoreStyle} from "./styles";
import {MaterialIcon} from "../UI/MaterialIcon/MaterialIcon";
import {theme} from "../../styles/theme";

interface IScore{
    score?: number;
    onPlus?: () => void;
    onPrev?: () => void;
}
export const Score: FC<IScore> = ({score, onPlus, onPrev}) => {
    return(
        <ScoreStyle>
            <MaterialIcon icon="MdAdd" color={theme.colors.secondary} onClick={onPlus}/>
            {score}
            <MaterialIcon icon="MdRemove" color={theme.colors.secondary} onClick={onPrev} />
        </ScoreStyle>
    )
}