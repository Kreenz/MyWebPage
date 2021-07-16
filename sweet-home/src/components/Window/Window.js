import React, { useState, useEffect } from "react";
import styled from "styled-components";

import IconMaximize from "../../assets/icons/ic_maximize.png";
import IconClose from "../../assets/icons/ic_close_white.png";
import IconMinimze from "../../assets/icons/ic_minimze.png";

import IconMaximizeSel from "../../assets/icons/ic_maximize_blue.png";
import IconCloseSel from "../../assets/icons/ic_close_red.png";
import IconMinimzeSel from "../../assets/icons/ic_minimze_blue.png";

const Wrapper = styled.div`
    ${props => `
        position:absolute;
        top: ${props.posY}px;
        left: ${props.posX}px;
        display:${props.display};
        flex-direction:column;
        width:${props.width}vw;
        height:${props.height}vh;
        background-color:#DBE4EB;
        border-radius:0.5vh;
        transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
        z-index: ${props.zIndex};
    `}
`

const WindowBar = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    height:4vh;
    background-color: #393939;
    border-top-left-radius: 0.5vh;
    border-top-right-radius: 0.5vh;
`

const WindowContent = styled.div`
    ${props =>`
        box-sizing: border-box;
        width:100%;
        height:100%;
        border: 0.1vh solid #222;
        max-height: ${props.maxHeightSize}vh;
        overscroll-y:auto;
    `}

`

const WindowProppertyWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:1vh;
`

const WindowName = styled.span`
    ${props => `
        color:#DBE4EB;
        font-size:${2 * props.sizeMultiplier}vh;
        margin-left:1vh;
    `}
`

const WindowImg = styled.img`
    width:2.5vh;
    height:2.5vh;
`

const ButtonWrappers = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:1vh;
`

const CloseButton = styled.div`
    width:2.5vh;
    height:2.5vh;
    background: url(${IconClose});
    background-size: 2.5vh 2.5vh;
    cursor:pointer;
    &:hover{
        background: url(${IconCloseSel});
        background-size: 2.5vh 2.5vh;
    }
`

const MinimzeButton = styled.div`
    width:2.5vh;
    height:2.5vh;
    background: url(${IconMinimze});
    background-size: 2.5vh 2.5vh;
    cursor:pointer;
    &:hover{
        background: url(${IconMinimzeSel});
        background-size: 2.5vh 2.5vh;
    }
`

const MaximizeButton = styled.div`
    width:2.5vh;
    height:2.5vh;
    background: url(${IconMaximize});
    background-size: 2.5vh 2.5vh;
    cursor:pointer;
    &:hover{
        background: url(${IconMaximizeSel});
        background-size: 2.5vh 2.5vh;
    }
`

function Window(props) {
    const [config, setConfiguration] = useState(JSON.parse(localStorage.getItem("configuration")))
    const [positionX, setPositionX] = useState(5);
    const [positionY, setPositionY] = useState(50); 
    const [downPosX, setDownPosX] = useState(null);
    const [downPosY, setDownPosY] = useState(null);
    const [isHold, setHold] = useState(false)
    const [screenSize, setScreenSize] = useState({width: 40, height: 70})
    const [maxHeightSize, setMaxHeightSize] = useState(66)
    const [maximized, setMaximized] = useState(false);
    let App = props.app;

    useEffect(() => {
        let newConfig;
        if(!config) {
            newConfig = {
                sizeMultiplier: 1,
                fontFamily: "",
                background: "",
                theme: "",
            }

            localStorage.setItem("configuration", JSON.stringify(newConfig));
            setConfiguration(newConfig)
        }

        
    }, [config]);

    const setWindowPosition = (e) => {
        if(isHold) {
            let y = e.clientY;
            let x = e.clientX;

            let checkY = ((e.currentTarget.parentNode.offsetLeft + (x - downPosX)) > 0 && (((e.currentTarget.parentNode.offsetWidth + e.currentTarget.parentNode.offsetLeft) + (x - downPosX)) < window.innerWidth));
            let checkX = ((e.currentTarget.parentNode.offsetTop + (y - downPosY)) > 50 && (((e.currentTarget.parentNode.offsetHeight + e.currentTarget.parentNode.offsetTop) + (y - downPosY)) < window.innerHeight));
            
            if(checkX) {
                setPositionY((y - downPosY) + positionY);
                setDownPosY((y - downPosY) + downPosY);
            }

            if(checkY) {
                setPositionX((x - downPosX) + positionX);
                setDownPosX((x - downPosX) + downPosX);
            }

        }
    }

    const isUp = () => {
        setHold(false);
    } 

    const isDown = (e) => {
        let y = e.clientY;
        let x = e.clientX;

        setDownPosX(x);
        setDownPosY(y);

        setHold(true);
    }

    const maximizeWindow = () => {

        if(!maximized) {
            setPositionX(5);
            setPositionY(50);
            let size = screenSize;
            size.width = 99.5;
            size.height = 94;
            setScreenSize(size);
            setMaxHeightSize(90);
            setMaximized(true)
        } else {
            let size = screenSize;
            size.width = 40;
            size.height = 70;
            setScreenSize(size);
            setMaxHeightSize(66);
            setMaximized(false);
        }
    }

    const minimzeWindow = () => {
        if(App.display === "flex")
            App.display = "none";
        else App.display = "flex";
    }

    return (
        <Wrapper zIndex={App.index} display={App.display} posY={positionY} posX={positionX} width={screenSize.width} height={screenSize.height}>
            <WindowBar onMouseUp={isUp} onMouseDown={(e) => isDown(e)} onMouseMove={(e) => setWindowPosition(e)}>
                <WindowProppertyWrapper>
                    <WindowImg src={App.icon} />
                    <WindowName>{App.name}</WindowName>
                </WindowProppertyWrapper>
                
                <ButtonWrappers>
                    <MinimzeButton onClick={minimzeWindow}/>
                    <MaximizeButton onClick={maximizeWindow}/>
                    <CloseButton onClick={() => props.closeApp(App.name)}/>
                </ButtonWrappers>
            </WindowBar>
            <WindowContent maxHeightSize={maxHeightSize}>
                {App.component}
            </WindowContent>
        </Wrapper>
    );
}

export default Window;
