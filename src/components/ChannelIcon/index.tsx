import React from "react";
import * as S from "./styles";


type propsType = {
  avatar: string;
};

const index = ({avatar}: propsType) => {
  return <S.ChannelIcon src={avatar}></S.ChannelIcon>
};

export default index;
