import React from "react";
import * as S from "./styles";
import VideoTime from "../VideoTime";

type propsType = {};

const index = ({}: propsType) => {
  return (
    <S.VideoImage >
      <img src="https://i.ytimg.com/vi/HLetFEpgPgY/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLDN_gVMZH4HSpRsf1haVXRjbU1vNQ" />
      <VideoTime videoTime="123:31" />
    </S.VideoImage>
  );
};

export default index;
