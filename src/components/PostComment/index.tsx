import React, {FC} from "react";

import {SectionComment, FormSendComment} from "../../components";

import {useSubmitComment} from "../../hooks/useSubmitComment";

export const PostComment: FC = () => {
    const {onSubmit, setComment, comment} = useSubmitComment();

    return(
        <SectionComment>
            <FormSendComment
                value={comment}
                onSubmit={(e) => onSubmit(e)}
                onChange={(e) => setComment(e.target.value)}
            />
        </SectionComment>
    )
}