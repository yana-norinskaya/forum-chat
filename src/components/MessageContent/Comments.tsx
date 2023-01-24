import React, {FC, useState} from "react";
import {Score} from "../Score";
import {Button, Variant} from "../UI/Button";
import {Flex, FlexValue} from "../../styles/flex";
import {Wrap} from "./style";
import {InfoUser} from "../UI/InfoUser";
import {IComment} from "../../interface/message";
import {RepliesMessage} from "./ReplyMessage";
import { SectionMessage } from "../SectionMain";
import {useDeleteCommentMutation, useGetCurrentUserQuery} from "../../store/reducers/messages.api";
import {TextMessage} from "./style";
import {PostReply} from "../PostReply";
import {FormEditComment} from "../Form/FormEditComment";
import {useChangeScoreComment} from "../../hooks/useChangeScore";


interface IComments{
    singleComment: IComment
}
export const Comments: FC<IComments> = ({ singleComment}) => {
    const {data: currentUser} = useGetCurrentUserQuery("currentUser");
    const {id, score, createdAt, user, replies} = singleComment;
    const [deleteComment] = useDeleteCommentMutation();
    const [edit, setEdit] = useState(false);
    const [form, setForm] = useState(false);
    const {onPrev, onPlus} = useChangeScoreComment(singleComment);

        return(
            <>
            <SectionMessage>
                <Score score={score} onPrev={onPrev} onPlus={onPlus}/>
                    <Wrap>
                        <Flex align={FlexValue.stretch}>
                             <InfoUser
                                 createdAt={createdAt}
                                 userName={user.username}
                                 img={user.image.png}/>
                         <Flex>
                            {user.username === currentUser?.username
                             ? <>
                                 <Button
                                     title="Delete"
                                     icon="MdDelete"
                                     variant={Variant.warning}
                                     onClick={() => deleteComment(String(id))}/>
                                 <Button
                                     title="Edit"
                                     icon="MdEdit"
                                     onClick={() => setEdit(!edit)}/>
                               </>
                             :   <Button
                                     title="Reply"
                                     icon="MdReply"
                                     onClick={() => setForm(!form)}/>
                            }
                         </Flex>
                         </Flex>
                        <FormEditComment
                            singleComment={singleComment}
                            edit={edit}
                            setEdit={setEdit}/>
                    </Wrap>
            </SectionMessage>

                {form &&
                    <SectionMessage>
                        <PostReply singleComment={singleComment} replyTo={user.username} setForm={setForm}/>
                    </SectionMessage>
                }

                {replies?.map((reply) => <RepliesMessage key={reply.id}
                    singleComment={singleComment}
                    reply={reply}/>)}
        </>
    )
    }