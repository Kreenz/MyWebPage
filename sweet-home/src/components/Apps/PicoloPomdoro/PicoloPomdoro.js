import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
    height:100%;
    max-width:100%;
`

const AppFrame = styled.iframe`
  width:100%;
  height:100%;
  border:none;
`

function PicoloPomdoro(props) {

  return (
    <Wrapper>
        <AppFrame src={"https://dow99999.github.io/m09_disseny_interficies_web/"} />
    </Wrapper>
  );
}

export default PicoloPomdoro;
