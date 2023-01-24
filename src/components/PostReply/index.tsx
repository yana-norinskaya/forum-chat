import React, {Dispatch, FC, SetStateAction} from "react";
import {SectionMessage, Width} from "../SectionMain";
import {FormSendMessage} from "../Form/FormSendMessage";
import {useFormSubmitReply} from "../../hooks/useFormSubmit";
import {IComment} from "../../interface/message";

interface IPostReply{
    singleComment: IComment,
    replyTo: string;
    setForm: Dispatch<SetStateAction<boolean>>
}

export const PostReply: FC<IPostReply> = ({singleComment, replyTo, setForm}) => {

    const {comment, setComment, onSubmitComment} = useFormSubmitReply(singleComment, setForm, replyTo);

    return(
        <>
            <FormSendMessage
                onSubmit={(e) => onSubmitComment(e)}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                title="reply"/>
        </>
    )
}