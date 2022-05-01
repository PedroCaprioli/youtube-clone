import React from "react";
import * as S from "./styles";


type propsType = {
  channelName: string;
};

const index = ({ channelName }: propsType) => {
  return <S.ChannelName>{channelName}</S.ChannelName>;
};

export default index;
