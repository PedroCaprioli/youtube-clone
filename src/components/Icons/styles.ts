import styled from "styled-components";
import { propsType } from "./index";

export const Icons = styled.div<propsType>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.background === "blackMatte" ? "#181818" : "none"};
  :hover {
    background: ${(props) => props.hoverBackground === true ? "#383838" : "none"};
  }
`
