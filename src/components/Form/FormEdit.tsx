import { Input } from "../UI/Input";
import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {Form} from "./style";
import {ButtonSubmit} from "../UI/ButtonSubmit";
import {UseFormEditReply} from "../../hooks/useFormEdit";
import {IComment, Reply} from "../../interface/message";
import {TextMessage} from "../MessageContent/style";
import {theme} from "../../styles/theme";

interface IForm {
    singleComment: IComment;
    reply: Reply
    edit?: boolean;
    setEdit: Dispatch<SetStateAction<boolean>>
}

export const FormEditReply: FC<IForm> = ({singleComment, reply, edit, setEdit}) => {
    const {id, replyingTo, content} = reply;

    const [value, setValue] = useState(content);

    const {onSubmitEdit} = UseFormEditReply(singleComment, setEdit);

    return(
            <>
        {
            edit
                ?   <Form onSubmit={(e) => onSubmitEdit(e, value, id)}>
                    <Input
                        value={value}
                        onChange={(e) => setValue(e.target.value)} />
                    <ButtonSubmit title="Update"/>
                    </Form>
                :   <TextMessage>
                            <span style={{
                                color: theme.colors.primary,
                                paddingRight: theme.sizes.xs,
                                fontWeight: theme.fontWeight.m
                            }}>
                                @{replyingTo}
                            </span>
                    {content}
                </TextMessage>
        }
            </>
    )
}