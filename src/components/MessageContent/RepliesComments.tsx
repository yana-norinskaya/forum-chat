import React, {FC, useState} from "react";

import {IComment, Reply} from "../../interface/message";
import {Width} from "../SectionComment";
import {Variant} from "../UI/Button";

import {Flex, FlexValue} from "../../styles/flex";
import {RepliesSection, Wrap} from "./style";

import {useDeleteByIdReply} from "../../hooks/useDeleteByIdReply";

import {useGetCurrentUserQuery} from "../../store/reducers/messages.api";
import {useChangeScoreReply} from "../../hooks/useChangeScoreReply";

import {
    Score,
    SectionComment,
    InfoUser,
    Button,
    FormEditReply,
    PostReply,
    Modal} from "../../components";


interface IReply{
    reply: Reply;
    singleComment: IComment
}

export const RepliesComments: FC<IReply> = ({singleComment, reply}) => {

    const {score, createdAt, user, id} = reply;

    const {data: currentUser} = useGetCurrentUserQuery("currentUser");

    const {onDelete} = useDeleteByIdReply(singleComment);

    const {onPlus, onPrev} = useChangeScoreReply(singleComment, score, id);

    const [toggleEdit, setToggleEdit] = useState(false);
    const [toggleForm, setToggleForm] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);

    return(
        <>
        <RepliesSection>
            <SectionComment width={Width.reply} >
                    <Score
                        score={score}
                        onPlus={() => onPlus()}
                        onPrev={() => onPrev()}/>
                    <Wrap>
                        <Flex align={FlexValue.stretch}>
                            <InfoUser
                                createdAt={createdAt}
                                userName={user.username}
                                img={user.image.png}/>
                            <Flex>
                                {
                                    user.username === currentUser?.username
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
                            <FormEditReply
                                reply={reply}
                                singleComment={singleComment}
                                toggleEdit={toggleEdit}
                                setToggleEdit={setToggleEdit}
                            />
                    </Wrap>
            </SectionComment>

            {toggleForm &&
                <SectionComment width={Width.reply}>
                <PostReply
                    singleComment={singleComment}
                    replyTo={user.username}
                    setToggleForm={setToggleForm}/>
                </SectionComment>
            }

            {toggleModal &&
                <Modal
                    onDelete={() => onDelete(id)}
                    onCancel={() => setToggleModal(false)}/>}

        </RepliesSection>
        </>
    )
}
