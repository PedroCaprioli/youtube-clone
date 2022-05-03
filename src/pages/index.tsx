import styled from 'styled-components'
import React from "react"
import VideoTitle from '../components/VideoTitle';
import ChannelName from '../components/ChannelName';
import ViewsVideo from '../components/ViewsVideo';
import ChannelIcon from '../components/ChannelIcon';
import VideoTime from '../components/VideoTime';
import Icons from '../components/Icons';

type propsType = {

}

export default function Home(): propsType {
  return (
    <>
    <VideoTitle videoTitle="Exemplo De Video"></VideoTitle>
    <ChannelName channelName="JorginPlays"></ChannelName>
    <ViewsVideo viewsVideo="23 mil visualizações | há 3 horas"></ViewsVideo>
    <ChannelIcon></ChannelIcon>
    <VideoTime videoTime="10:34"></VideoTime>
    <Icons icon="tripleDot"></Icons>
    <Icons hoverBackground={true} icon="home"></Icons>
    <Icons hoverBackground={true} icon="explorer"></Icons>
    <Icons hoverBackground={true} icon="shorts"></Icons>
    <Icons hoverBackground={true} icon="subscribers"></Icons>
    <Icons hoverBackground={true} icon="library"></Icons>
    <Icons icon="bell"></Icons>
    <Icons icon="apps"></Icons>
    <Icons icon="send"></Icons>
    <Icons background="blackMatte" icon="searchByVoice"></Icons>
    <Icons icon="search"></Icons>
    <Icons icon="virtualKeyboard"></Icons>
    </>
  )
}
