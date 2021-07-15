import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    ${props => `
        width:5vh;
        height:5vh;
        border-left: 0.3vh solid lightgray;
        cursor:pointer;
        background: url(${props.icon}) no-repeat center;
        background-size: 3vh 3vh;
        &:hover{
            background-color: rgba(219,228,235, 0.5);
        }
        ${props.active ? "background-color: rgba(219,228,235, 0.2)" : ""}
    `}
`

function ExecuteApp(props) {
    const App = props.app;
    
    const appExists = (name) => {
        let found = false;
        let activeApps = props.activeApps;
        activeApps.forEach(activeApp => {
            if(activeApp.name === name) found = true;
        })

        return found;
    }

    const loadApp = () => {
        if(!appExists(App.name)) props.setActiveApps(oldApps => [...oldApps, App])
    }

    return (
    <Wrapper active={props.isActive(App.name)} icon={props.app.icon} onClick={() => loadApp()}>
    </Wrapper>
    );
}

export default ExecuteApp;
