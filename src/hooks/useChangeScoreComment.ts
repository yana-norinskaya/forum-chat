import {useGetMessageByIdMutation} from "../store/reducers/messages.api";
import {IComment} from "../interface/message";
import {useState} from "react";

export const useChangeScoreComment = (singleComment: IComment) => {

    const [getMessageById] = useGetMessageByIdMutation();

    const [like, setLike] = useState(singleComment.score);
    const date = {
        ...singleComment,
        score: like
    }
    let getScore = singleComment.score;
        const onPrev = async () => {
            if(like > getScore - 1){
            setLike(like - 1)
            }else {
            setLike(getScore)
            }

           await getMessageById(date)

    }
    const onPlus = async () => {

        if(like < getScore + 1){
            setLike(like + 1)
        }else {
            setLike(getScore)
        }

        await getMessageById(date)

    }

    return {onPlus, onPrev}
}
