import React from "react";
import * as S from "./styles";


type propsType = {
  videoTime: string;
};

const index = ({ videoTime }: propsType) => {
  return <S.VideoTime><p>{videoTime}</p></S.VideoTime>;
};

export default index;
