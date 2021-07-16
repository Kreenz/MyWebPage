import React, { useState } from "react";
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
        width:40%;
        font-size:${2 * props.sizeMultiplier}vh;
        ${props.styles}
    `}
`

const InputConfig = styled.input`
    ${props =>`
        width: 30%;
        border-radius:0.5vh;
        border:0.1vh solid lightgray;
        height: 4vh;
        font-size: ${2.5 * props.sizeMultiplier}vh;
        text-align: right;
        padding-right: 2vh;
        margin-left: 8vh;
        outline: none;
        ${props.styles}
    `}
`

const SaveButton = styled.button`
    ${props => `
        display:flex;
        align-items:center;
        justify-content:center;
        width: 26vh;
        height: 6vh;
        font-size: ${2 * props.sizeMultiplier}vh;
        cursor:pointer;
        background-color: #EDF7FF;
        border: 0.1vh solid lightgray;
        border-radius: 0.5vh;
        transition: background-color 0.2s ease-in-out;
        &:hover{
            background-color:rgb(38, 224, 127);
        }
    `}

`

const IconImage = styled.img`
    margin-left:1vh;
`

function Config(props) {
    let config = JSON.parse(localStorage.getItem("configuration"));
    const [sizeMultiplier, setSizeMultiplier] = useState(config.sizeMultiplier);

    const saveConfig = () => {
        if(!config) {
            config = {
                sizeMultiplier: 1,
                fontFamily: "",
                background: "",
                theme: "",
            }
        } else 
            config.sizeMultiplier = sizeMultiplier;
        
        console.log(config, sizeMultiplier, "request_config");
        localStorage.setItem("configuration", JSON.stringify(config));
    }

    return (
        <Wrapper>
            <AppContent>
                <ConfigRow>
                    <TitleConfig sizeMultiplier={config.sizeMultiplier}>Tamaño de la letra: </TitleConfig>
                    <InputConfig sizeMultiplier={config.sizeMultiplier} type={"text"} value={sizeMultiplier} onChange={(e) => setSizeMultiplier(e.currentTarget.value)}/>
                </ConfigRow>
                <ConfigRow>
                    <TitleConfig sizeMultiplier={config.sizeMultiplier}>Idioma: </TitleConfig>
                    <InputConfig sizeMultiplier={config.sizeMultiplier} styles={"background-color:#DBE4EB"} readOnly type={"text"} value={"Próximamente..."}/>
                </ConfigRow>
                <ConfigRow>
                    <TitleConfig sizeMultiplier={config.sizeMultiplier} >Fuente de la página: </TitleConfig>
                    <InputConfig sizeMultiplier={config.sizeMultiplier} styles={"background-color:#DBE4EB"} readOnly type={"text"} value={"Próximamente..."}/>
                </ConfigRow>
                <ConfigRow>
                    <TitleConfig sizeMultiplier={config.sizeMultiplier}>Temas: </TitleConfig>
                    <InputConfig sizeMultiplier={config.sizeMultiplier} styles={"background-color:#DBE4EB"} readOnly type={"text"} value={"Próximamente..."}/>
                </ConfigRow>
                <ConfigRow>
                    <TitleConfig sizeMultiplier={config.sizeMultiplier}>Fondo de pantalla: </TitleConfig>
                    <InputConfig sizeMultiplier={config.sizeMultiplier} styles={"background-color:#DBE4EB"} readOnly type={"text"} value={"Próximamente..."}/>
                </ConfigRow>
                <SaveButton sizeMultiplier={config.sizeMultiplier} onClick={saveConfig}> Guardar configuración <IconImage src={IconSave} alt={"Save config"}/></SaveButton>
            </AppContent>
        </Wrapper>
    );
}

export default Config;