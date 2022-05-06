import React from "react";
import * as S from "./styles";
import VideoWrapper from "../VideoWrapper";

type propsType = {};

const index = ({}: propsType) => {
  return (
    <S.VideoSection>
      <VideoWrapper />
      <VideoWrapper />
      <VideoWrapper />
      <VideoWrapper />
    </S.VideoSection>
  );
};

export default index;
