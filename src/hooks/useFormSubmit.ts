import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import {
    useAddReplyMutation,
    useGetCurrentUserQuery,
    useGetMessageByIdMutation,
} from "../store/reducers/messages.api";


import {IComment} from "../interface/message";

export const useFormSubmitReply = (singleComment: IComment, setForm: Dispatch<SetStateAction<boolean>>, replyTo: string) => {
    const {data: currentUser} = useGetCurrentUserQuery("currentUser");

    const [comment, setComment] = useState("");

    const [addComment] = useAddReplyMutation();

    const onSubmitComment = async (e: FormEvent) => {
        e.preventDefault();
        if(comment){
            const newReply = {
                id: Math.random(),
                content: comment,
                createdAt: "2 min ago",
                score: 0,
                replyingTo: replyTo,
                user: {
                    image: {
                        png: currentUser?.image.png,
                        webp: currentUser?.image.png
                    },
                    username: currentUser?.username,
                },
            }

            const date = {
                ...singleComment,
                replies: [...singleComment.replies, newReply]
            }

            await addComment(date as IComment);
            setComment("");
            setForm(false);
        }else{
            setForm(false);
        }
    }

    return {onSubmitComment, setComment, comment, setForm, currentUser}
}


export const useDeleteByIdReply = (singleComment: IComment) => {
    const [getMessageById] = useGetMessageByIdMutation();

    const onDelete = async (id: number) => {
        const date = {
            ...singleComment,
            replies: singleComment.replies.filter(item => item.id !== id)
        }
        await getMessageById(date as IComment);
    }

    return {onDelete}
}