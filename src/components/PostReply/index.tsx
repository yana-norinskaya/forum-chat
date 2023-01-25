import React, {Dispatch, FC, SetStateAction} from "react";

import {FormSendComment} from "../Forms/FormSendComment";

import {useFormSubmitReply} from "../../hooks/useFormSubmitReply";

import {IComment} from "../../interface/message";

interface IPostReply{
    singleComment: IComment,
    replyTo: string;
    setToggleForm: Dispatch<SetStateAction<boolean>>
}

export const PostReply: FC<IPostReply> =
    ({
         singleComment,
         replyTo,
         setToggleForm
    }) => {

    const {comment, setComment, onSubmitComment} = useFormSubmitReply(singleComment, setToggleForm, replyTo);

    return(
        <>
            <FormSendComment
                onSubmit={(e) => onSubmitComment(e)}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                title="reply"/>
        </>
    )
}