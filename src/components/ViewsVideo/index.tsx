import React from "react";
import * as S from "./styles";


type propsType = {
  viewsVideo: string;
};

const index = ({ viewsVideo }: propsType) => {
  return <S.ViewsVideo>{viewsVideo}</S.ViewsVideo>;
};

export default index;
