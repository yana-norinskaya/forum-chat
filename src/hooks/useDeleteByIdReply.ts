import {IComment} from "../interface/message";
import {useGetMessageByIdMutation} from "../store/reducers/messages.api";

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