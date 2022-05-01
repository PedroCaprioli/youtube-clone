import React from "react";
import * as S from "./styles";


type propsType = {
  videoTitle: string;
};

const index = ({ videoTitle }: propsType) => {
  return <S.VideoTitle>{videoTitle}</S.VideoTitle>;
};

export default index;
