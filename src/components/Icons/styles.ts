import styled from "styled-components";
import { propsType } from "./index";

export const Icons = styled.div<propsType>`
  cursor: pointer;
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  :hover {
    background: ${(props) => props.hoverBackground ? props.hoverBackground : props.background ||"transparent"}; //o grande problema do hover
  }
`
