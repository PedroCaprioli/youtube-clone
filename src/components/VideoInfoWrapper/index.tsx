import React from "react";
import * as S from "./styles";
import ChannelIcon from "../ChannelIcon";
import VideoTitle from "../VideoTitle";
import ChannelName from "../ChannelName";
import ViewsVideo from "../ViewsVideo";
import Icons from "../Icons";

type propsType = {};

const index = ({}: propsType) => {
  return (
    <S.VideoInfoWrapper>
      <ChannelIcon avatar="https://infantv.com.br/infantv/wp-content/uploads/2016/07/picapau.jpg" />
      <div className="info">
        <VideoTitle videoTitle="Minecraft: DUPLA SURVIVAL 3.0 - O INICIO com uma CASA NA ÁRVORE! #01"/>
        <ChannelName channelName="LuquinhasGameplays" />
        <ViewsVideo viewsVideo="5 mil visualizações | há 3 horas" />
      </div>
      <Icons icon="tripleDot"></Icons>
    </S.VideoInfoWrapper>
  );
};

export default index;
