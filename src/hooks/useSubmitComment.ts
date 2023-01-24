import {useAddCommentMutation, useGetCurrentUserQuery} from "../store/reducers/messages.api";
import {FormEvent, useState} from "react";
import {IComment} from "../interface/message";

export const useSubmitComment = () => {
    const {data: currentUser} = useGetCurrentUserQuery("currentUser");

    const [comment, setComment] = useState("");

    const [addComment] = useAddCommentMutation();

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const date = {
            id: Math.random(),
            content:comment,
            createdAt: "1 min ago",
            score: 0,
            user: {
                image: {
                    png: currentUser?.image.png,
                    webp: currentUser?.image.webp
                },
                username: currentUser?.username
        }
        }
        await addComment(date as IComment);
        setComment("");
    }
    return {onSubmit, setComment, comment}
}