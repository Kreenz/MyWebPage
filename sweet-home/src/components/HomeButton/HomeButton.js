import React from "react";
import styled from "styled-components";

import IconHome from "../../assets/icons/ic_home.png";

const Wrapper = styled.div`
    width:4vh;
    height:4vh;
    margin:1vh;
    background: url(${IconHome}) no-repeat center;
    cursor:pointer;
    margin-right:2vh;
    &:hover{
        border:0.1vh solid rgba(196, 202, 206, 0.5); 
        margin-left:0.9vh;
        margin-right:1.9vh;
    }
`

function HomeButton() {

  return (
    <Wrapper>
    </Wrapper>
  );
}

export default HomeButton;
