import {IComment} from "../interface/message";
import {useAddReplyMutation} from "../store/reducers/messages.api";
import {Dispatch, FormEvent, SetStateAction} from "react";

export const UseFormEditReply = (singleComment: IComment, setToggleEdit: Dispatch<SetStateAction<boolean>>) => {

    const [addReply] = useAddReplyMutation();

    const onSubmitEdit = async (e: FormEvent, editedContent: string, currentId: number ) => {
        e.preventDefault();

       if(editedContent){
           const date = {
               ...singleComment,
               replies: singleComment.replies.map(item => item.id === currentId ? {...item, content: editedContent} : item)
           }

           await addReply(date as IComment);
           setToggleEdit(false)
       }
    }
    return {onSubmitEdit, setToggleEdit }
}