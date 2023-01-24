import {ChangeEvent, FC, FormEvent} from "react";
import {useGetCurrentUserQuery} from "../../store/reducers/messages.api";
import {Avatar, Radios, SizeImg} from "../UI/Avatar";
import {Input} from "../UI/Input";
import {ButtonSubmit} from "../UI/ButtonSubmit";
import {FormStyle} from "./style";


interface IForm {
    onSubmit?: (e: FormEvent) => void;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    title?: string;
}

export const FormSendMessage: FC<IForm> = ({onSubmit, value, onChange, title = "send"}) => {
    const {data: currentUser} = useGetCurrentUserQuery("currentUser");

    return(
        <>
            <FormStyle action="#" onSubmit={onSubmit}>
                <Avatar src={currentUser?.image.png} sizeImg={SizeImg.m} radios={Radios.middle} />
            <Input
                value={value}
                onChange={onChange}
            />
            <ButtonSubmit title={title}/>
            </FormStyle>
        </>
    )
}