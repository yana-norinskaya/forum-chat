import React, {Dispatch, FC, SetStateAction, useState} from "react";

import {ButtonSubmit, Input} from "../../components";

import {IComment} from "../../interface/message";

import {TextMessage} from "../MessageContent/style";
import {FormComment} from "./style";

import {useFormEditComment} from "../../hooks/useFormEditComment";

interface IForm {
    singleComment: IComment;
    toggleEdit?: boolean;
    setToggleEdit: Dispatch<SetStateAction<boolean>>
}

export const FormEditComment: FC<IForm> =
    ({
         singleComment,
         toggleEdit,
         setToggleEdit}) => {

    const [value, setValue] = useState(singleComment.content);

    const {onSubmitEdit} = useFormEditComment(singleComment, setToggleEdit);

    return(
        <>
            {
                toggleEdit
                    ?   <FormComment onSubmit={(e) => onSubmitEdit(e, value)}>
                        <Input
                            value={value}
                            onChange={(e) => setValue(e.target.value)} />
                        <ButtonSubmit title="Update"/>
                    </FormComment>
                    :   <TextMessage>
                        {singleComment.content}
                    </TextMessage>
            }

        </>
    )
}