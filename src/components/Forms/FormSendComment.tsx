import {ChangeEvent, FC, FormEvent} from "react";

import {useGetCurrentUserQuery} from "../../store/reducers/messages.api";

import {Radios, SizeImg} from "../UI/Avatar";

import {ButtonSubmit, Avatar, Input} from "../../components";

import {FormComment} from "./style";


interface IForm {
    onSubmit?: (e: FormEvent) => void;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    title?: string;
}

export const FormSendComment: FC<IForm> = ({
      onSubmit,
      value,
      onChange,
      title = "send"
}) => {

    const {data: currentUser} = useGetCurrentUserQuery("currentUser");

    return(
        <>
            <FormComment action="#" onSubmit={onSubmit}>
                <Avatar
                    src={currentUser?.image.png}
                    sizeImg={SizeImg.m}
                    radios={Radios.middle} />
                <Input
                    value={value}
                    onChange={onChange}/>
                <ButtonSubmit title={title}/>
            </FormComment>
        </>
    )
}