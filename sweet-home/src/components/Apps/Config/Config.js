import React from "react";
import styled from "styled-components";

import IconSave from "../../../assets/icons/ic_save.png";

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;
`

const AppContent = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:flex-start;
    width:80%;
    height:90%;
    border-left: 0.1vh solid #393939;
    border-right: 0.1vh solid #393939;
    padding: 2vh;
`

const ConfigRow = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #EDF7FF;
    margin-bottom:2vh;
    border-radius: 0.5vh;
    height: 7vh;
    width: 100%;
`

const TitleConfig = styled.span`
    ${props =>`
        width:20%;
        font-size:2vh;
        ${props.styles}
    `}
`

const InputConfig = styled.input`
    ${props =>`
        width: 30%;
        border-radius:0.5vh;
        border:0.1vh solid lightgray;
        height: 4vh;
        font-size: 2.5vh;
        text-align: right;
        padding-right: 2vh;
        margin-left: 8vh;
        outline: none;
        ${props.styles}
    `}
`

const SaveButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 26vh;
    height: 6vh;
    font-size: 2vh;
    cursor:pointer;
    background-color: #EDF7FF;
    border: 0.1vh solid lightgray;
    border-radius: 0.5vh;
    transition: background-color 0.2s ease-in-out;
    &:hover{
        background-color:rgb(38, 224, 127);
    }
`

const IconImage = styled.img`
    margin-left:1vh;
`

function Config(props) {

    const saveConfig = () => {

    }

    return (
        <Wrapper>
            <AppContent>
                <ConfigRow>
                    <TitleConfig>Tamaño de la letra: </TitleConfig>
                    <InputConfig type={"text"} />
                </ConfigRow>
                <ConfigRow>
                    <TitleConfig>Fuente de la página: </TitleConfig>
                    <InputConfig styles={"background-color:#DBE4EB"} readOnly type={"text"} value={"Próximamente..."}/>
                </ConfigRow>
                <ConfigRow>
                    <TitleConfig>Temas: </TitleConfig>
                    <InputConfig styles={"background-color:#DBE4EB"} readOnly type={"text"} value={"Próximamente..."}/>
                </ConfigRow>
                <ConfigRow>
                    <TitleConfig>Fondo de pantalla: </TitleConfig>
                    <InputConfig styles={"background-color:#DBE4EB"} readOnly type={"text"} value={"Próximamente..."}/>
                </ConfigRow>
                <SaveButton onClick={saveConfig}> Guardar configuración <IconImage src={IconSave} alt={"Save config"}/></SaveButton>
            </AppContent>
        </Wrapper>
    );
}

export default Config;