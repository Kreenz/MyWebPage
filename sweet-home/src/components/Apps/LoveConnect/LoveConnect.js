import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width:100%;
  height:100%;
`

const AppFrame = styled.iframe`
  width:100%;
  height:100%;
  border:none;
`

function LoveConnect(props) {

  return (
    <Wrapper>
      <AppFrame src={"https://love-connect-nu.vercel.app/"} />
    </Wrapper>
  );
}

export default LoveConnect;
