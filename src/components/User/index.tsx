import {FC} from "react";
import {UserStyle} from "./style";
import {TextMessage} from "../MessageContent/style";

interface IUser{
    avatar: string,
    createdAt: string,
    userName: string
}
export const User: FC<IUser> = ({avatar, createdAt, userName}) => {
    return(
        <UserStyle>
            <img src={avatar} alt="avatar"/>
            <p>{userName}</p>
            <TextMessage>{createdAt}</TextMessage>
        </UserStyle>
        )
}