import React, {FC, useState} from "react";
import {RepliesSection, Wrap} from "./style";
import {IComment, Reply} from "../../interface/message";
import {SectionMessage, Width} from "../SectionMain";
import {Score} from "../Score";
import {Flex, FlexValue} from "../../styles/flex";
import {InfoUser} from "../UI/InfoUser";
import {Button, Variant} from "../UI/Button";
import {useDeleteByIdReply} from "../../hooks/useFormSubmit";
import {FormEditReply} from "../Form/FormEdit";
import {PostReply} from "../PostReply";
import {useGetCurrentUserQuery} from "../../store/reducers/messages.api";
import {useChangeScoreReply} from "../../hooks/useChangeScore";


interface IReply{
    reply: Reply;
    singleComment: IComment
}

export const RepliesMessage: FC<IReply> = ({singleComment, reply}) => {
    const {data: currentUser} = useGetCurrentUserQuery("currentUser");

    const {score, createdAt, user, id} = reply;

     const [edit, setEdit] = useState(false)

    const [form, setForm] = useState(false)

    const {onDelete} = useDeleteByIdReply(singleComment);

     const {onPlus, onPrev} = useChangeScoreReply(singleComment, score, id);

    return(
        <>
        <RepliesSection>
            <SectionMessage width={Width.reply} >
                    <Score score={score} onPlus={() => onPlus()} onPrev={() => onPrev()}/>
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
                                            onClick={() => onDelete(id)} />
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
                            <FormEditReply
                                reply={reply}
                                singleComment={singleComment}
                                edit={edit}
                                setEdit={setEdit}
                            />
                    </Wrap>
            </SectionMessage>
            {form &&
                <SectionMessage width={Width.reply}>
                <PostReply singleComment={singleComment} replyTo={user.username} setForm={setForm}/>
                </SectionMessage>
            }
        </RepliesSection>
        </>
    )
}
