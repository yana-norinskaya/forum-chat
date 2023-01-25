import {IComment} from "../interface/message";
import {useGetMessageByIdMutation} from "../store/reducers/messages.api";
import {useState} from "react";

export const useChangeScoreReply = (singleComment: IComment, score: number, currentId: number) => {

    const [getMessageById] = useGetMessageByIdMutation();

    const [like, setLike] = useState(score);

    const date = {
        ...singleComment,
        replies: singleComment.replies.map(item => item.id === currentId ? {...item, score: like} : item)
    }

    let getScore = score;

    const onPrev = async () => {
        if(like > getScore - 1){
            setLike(like - 1)
        }else {
            setLike(getScore)
        }
        await getMessageById(date as IComment)
    }

    const onPlus = async () => {
        if(like < getScore + 1){
            setLike(like + 1)
        }else {
            setLike(getScore)
        }
        await getMessageById(date as IComment)
    }

    return {onPlus, onPrev}
}