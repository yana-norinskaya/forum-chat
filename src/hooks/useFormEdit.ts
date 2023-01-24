import {IComment} from "../interface/message";
import {useGetMessageByIdMutation} from "../store/reducers/messages.api";
import {Dispatch, FormEvent, SetStateAction, useState} from "react";

export const UseFormEditReply = (singleComment: IComment, setEdit: Dispatch<SetStateAction<boolean>>) => {
    const [getMessageById] = useGetMessageByIdMutation();

    const onSubmitEdit = async (e: FormEvent, editedContent: string, currentId: number ) => {
       e.preventDefault();
        let newReplies = singleComment.replies.find(item => item.id === currentId);
       if(editedContent){
           const date = {
               ...singleComment,
               replies: [...singleComment.replies.filter(item => item !== newReplies), {...newReplies, content: editedContent}]
           }
           await getMessageById(date as IComment);
           setEdit(false)
       }
    }
    return {onSubmitEdit, setEdit }
}