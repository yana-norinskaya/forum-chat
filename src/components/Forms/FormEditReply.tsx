import React, {Dispatch, FC, SetStateAction, useState} from "react";

import {ButtonSubmit, Input} from "../../components";

import {UseFormEditReply} from "../../hooks/useFormEditReply";

import {IComment, Reply} from "../../interface/message";

import {TextMessage} from "../MessageContent/style";
import {FormReply} from "./style";
import {theme} from "../../styles/theme";

interface IForm {
    singleComment: IComment;
    reply: Reply
    toggleEdit?: boolean;
    setToggleEdit: Dispatch<SetStateAction<boolean>>
}

export const FormEditReply: FC<IForm> =
    ({
         singleComment,
         reply,
         toggleEdit,
         setToggleEdit}) => {

    const {id, replyingTo, content} = reply;

    const [value, setValue] = useState(content);

    const {onSubmitEdit} = UseFormEditReply(singleComment, setToggleEdit);

    return(
            <>
        {
            toggleEdit
                ?   <FormReply onSubmit={(e) => onSubmitEdit(e, value, id)}>
                        <Input
                            value={value}
                            onChange={(e) => setValue(e.target.value)} />
                            <ButtonSubmit title="Update"/>
                    </FormReply>
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