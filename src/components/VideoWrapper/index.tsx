import React from "react";
import * as S from "./styles";
import VideoImage from "../VideoImage";
import VideoInfoWrapper from "../VideoInfoWrapper";


type propsType = {};

const index = ({}: propsType) => {
  return (
    <S.VideoWrapper>
      <VideoImage />
      <VideoInfoWrapper/>
    </S.VideoWrapper>
  );
};

export default index;
