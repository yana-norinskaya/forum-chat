import {FC} from "react";

import styled from "styled-components";

import {TextMessage} from "../../MessageContent/style";

import {Avatar} from "../../../components";

import {useGetCurrentUserQuery} from "../../../store/reducers/messages.api";

export const UserName = styled.p(({theme}) => ({
    fontWeight: theme.fontWeight.m,
    fontSize: theme.fontSize.m,
    color: theme.colors.dark,
}))

export const You = styled.div(({theme}) => ({
    fontWeight: theme.fontWeight.m,
    fontSize: theme.fontSize.xs,
    background: theme.colors.primary,
    color: "white",
    padding: "5px",
    borderRadius: "2px"
}))

export const AvatarStyle = styled.div`
  display: flex;
  min-width: 250px;
  justify-content: space-between;
  align-items: center;
`

interface IAvatar {
    img: string;
    userName: string;
    createdAt: string
}

export const InfoUser: FC<IAvatar> = ({ img, userName, createdAt}) => {
        const {data: currentUser} = useGetCurrentUserQuery("currentUser");

   return(
       <AvatarStyle>
           <Avatar src={img} />
           <UserName>{userName}</UserName>
           {currentUser?.username === userName && <You>you</You>}
           <TextMessage>{createdAt}</TextMessage>
       </AvatarStyle>
   )
}