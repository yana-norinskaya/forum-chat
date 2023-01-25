import React, {FC, useState} from "react";

import {Variant} from "../UI/Button";

import {Flex, FlexValue} from "../../styles/flex";
import {Wrap} from "./style";

import {IComment} from "../../interface/message";

import {useChangeScoreComment} from "../../hooks/useChangeScoreComment";

import {useDeleteCommentMutation, useGetCurrentUserQuery} from "../../store/reducers/messages.api";

import {
    Score,
    Button,
    InfoUser,
    RepliesComments,
    SectionComment,
    PostReply,
    FormEditComment,
    Modal} from "../../components";

interface IComments{
    singleComment: IComment
}

export const Comments: FC<IComments> = ({ singleComment}) => {
    const {id, score, createdAt, user, replies} = singleComment;

    const {data: currentUser} = useGetCurrentUserQuery("currentUser");

    const {onPrev, onPlus} = useChangeScoreComment(singleComment);

    const [deleteComment] = useDeleteCommentMutation();

    const [toggleEdit, setToggleEdit] = useState(false);
    const [toggleForm, setToggleForm] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);

        return(
            <>
            <SectionComment>
                <Score
                    score={score}
                    onPrev={onPrev}
                    onPlus={onPlus}/>
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
                                     onClick={() => setToggleModal(true)}/>
                                 <Button
                                     title="Edit"
                                     icon="MdEdit"
                                     onClick={() => setToggleEdit(!toggleEdit)}/>
                                    </>
                                 :   <Button
                                     title="Reply"
                                     icon="MdReply"
                                     onClick={() => setToggleForm(!toggleForm)}/>
                                    }
                         </Flex>
                         </Flex>
                        <FormEditComment
                            singleComment={singleComment}
                            toggleEdit={toggleEdit}
                            setToggleEdit={setToggleEdit}/>
                    </Wrap>
            </SectionComment>

                {toggleForm &&
                    <SectionComment>
                        <PostReply
                            singleComment={singleComment}
                            replyTo={user.username}
                            setToggleForm={setToggleForm}/>
                    </SectionComment>
                }

                {replies?.map((reply) => <RepliesComments key={reply.id}
                    singleComment={singleComment}
                    reply={reply}/>)}

                {toggleModal &&
                    <Modal
                        onDelete={() => deleteComment(String(id))}
                        onCancel={() => setToggleModal(false)}/>}

        </>
    )
    }