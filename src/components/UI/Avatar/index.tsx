import {FC} from "react";
import styled from "styled-components";

export enum SizeImg {
    s = "s",
    m = "m",
}
export enum Radios {
    small = "small",
    middle = "middle",
}

interface ImgProps {
    sizeImg: SizeImg,
    radios: Radios
}

export const Img = styled.img<ImgProps>(({theme, sizeImg, radios}) => ({
    width: theme.imageSizes[sizeImg],
    height: theme.imageSizes[sizeImg],
    borderRadius: theme.borderRadius[radios],
}))

interface IAvatar {
    src?: string,
    sizeImg?: SizeImg,
    radios?: Radios
}

export const Avatar: FC<IAvatar> = ({src, sizeImg = SizeImg.s, radios = Radios.small}) => {
    return(
        <Img src={src} alt="avatar" sizeImg={sizeImg} radios={radios}/>
    )
}