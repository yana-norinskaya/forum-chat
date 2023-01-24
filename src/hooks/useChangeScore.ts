import {useGetMessageByIdMutation} from "../store/reducers/messages.api";
import {IComment} from "../interface/message";
import {useState} from "react";

export const useChangeScoreComment = (singleComment: IComment) => {

    const [getMessageById] = useGetMessageByIdMutation();

    const [like, setLike] = useState(singleComment.score);

    const onPrev = () => {
        const date = {
            ...singleComment,
            score: like
        }
        if(like >= 0)
            setLike(like - 1)
        getMessageById(date)
    }
    const onPlus = () => {
        const date = {
            ...singleComment,
            score: like
        }
        setLike(like + 1)
        getMessageById(date)
    }
   return {onPlus, onPrev}
}

export const useChangeScoreReply = (singleComment: IComment, score: number, currentId: number) => {

    const [getMessageById] = useGetMessageByIdMutation();

    const [like, setLike] = useState(score);

    const onPrev = async () => {
        const date = {
            ...singleComment,
            replies: singleComment.replies.map(item => item.id === currentId ? {...item, score: like} : item)
        }
        if(like >= 0)
            setLike(like - 1)
       await getMessageById(date as IComment)
    }
    const onPlus = async () => {
        const date = {
            ...singleComment,
            replies: singleComment.replies.map(item => item.id === currentId ? {...item, score: like} : item)
        }
        setLike(like + 1)
       await getMessageById(date as IComment)
    }

    return {onPlus, onPrev}
}