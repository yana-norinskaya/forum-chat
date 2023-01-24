import { Input } from "../UI/Input";
import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {Form} from "./style";
import {ButtonSubmit} from "../UI/ButtonSubmit";

import {IComment, Reply} from "../../interface/message";
import {TextMessage} from "../MessageContent/style";

import {UseFormEditComment} from "../../hooks/useFormEditComment";

interface IForm {
    singleComment: IComment;
    edit?: boolean;
    setEdit: Dispatch<SetStateAction<boolean>>
}

export const FormEditComment: FC<IForm> = ({singleComment, edit, setEdit}) => {

    const [value, setValue] = useState(singleComment.content);

    const {onSubmitEdit} = UseFormEditComment(singleComment, setEdit);

    return(
        <>
            {
                edit
                    ?   <Form onSubmit={(e) => onSubmitEdit(e, value)}>
                        <Input
                            value={value}
                            onChange={(e) => setValue(e.target.value)} />
                        <ButtonSubmit title="Update"/>
                    </Form>
                    :   <TextMessage>
                        {singleComment.content}
                    </TextMessage>
            }

        </>
    )
}