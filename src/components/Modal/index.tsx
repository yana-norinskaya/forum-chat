import {FC} from "react";

import {ModalBox, ModalStyle} from "./style";
import { Flex } from "../../styles/flex";

import {ButtonSubmit, Colors} from "../UI/ButtonSubmit";

interface IModal {
    onDelete: () => void;
    onCancel: () => void;
}

export const Modal: FC<IModal> = ({onDelete, onCancel}) => {
    return(
        <ModalStyle>
        <ModalBox>
            <p>Delete comment</p>
            <p>Are you sure want to delete this comment?
                This will remove the comment and can't be undone.
            </p>
            <Flex>
            <ButtonSubmit
                title="no, cancel"
                width="150px"
                color={Colors.grey}
                onClick={onCancel}/>
            <ButtonSubmit
                title="yes, delete"
                width="150px"
                color={Colors.warning}
                onClick={onDelete}/>
            </Flex>
        </ModalBox>
        </ModalStyle>
    )
}