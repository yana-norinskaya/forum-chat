import {IComment} from "../interface/message";
import {Dispatch, FormEvent, SetStateAction} from "react";
import {useGetMessageByIdMutation} from "../store/reducers/messages.api";

export const UseFormEditComment = (singleComment: IComment, setEdit: Dispatch<SetStateAction<boolean>>) => {
    const [getMessageById] = useGetMessageByIdMutation();

    const onSubmitEdit = async (e: FormEvent, editedContent: string) => {
        e.preventDefault();
            if(editedContent){
                const date = {
                 ...singleComment,
                 content: editedContent
                }
        await getMessageById(date as IComment);

        setEdit(false)
}

    }
    return {onSubmitEdit, setEdit }
}