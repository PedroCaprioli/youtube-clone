import styled from 'styled-components'
import React from "react"
import VideoTitle from '../components/VideoTitle';
import ChannelName from '../components/ChannelName';
import ViewsVideo from '../components/ViewsVideo';
import ChannelIcon from '../components/ChannelIcon';
import VideoTime from '../components/VideoTime'

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
    </>
  )
}
