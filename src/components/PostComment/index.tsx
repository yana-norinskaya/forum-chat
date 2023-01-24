import React, {FC} from "react";
import {FormSendMessage} from "../Form/FormSendMessage";
import {SectionMessage} from "../SectionMain";
import {useSubmitComment} from "../../hooks/useSubmitComment";

export const PostComment: FC = () => {
    const {onSubmit, setComment, comment} = useSubmitComment();

    return(
        <SectionMessage>
            <FormSendMessage
                value={comment}
                onSubmit={(e) => onSubmit(e)}
                onChange={(e) => setComment(e.target.value)}
            />
        </SectionMessage>
    )
}