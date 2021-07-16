import React, { useState } from "react";
import styled from "styled-components";

import myApps from "./windowapps";
import HomeButton from "./components/HomeButton/HomeButton"
import Window from "./components/Window/Window";
import ExecuteApp from "./components/ExecuteApp/ExecuteApp";

import WindowsWallpaper from "./assets/images/background.jpg";

const AppWrapper = styled.div`
  width:100vw;
  height:100vh;
`

const HomeBody = styled.div`
  width:100vw;
  height:95vh;
  background: url(${WindowsWallpaper}) no-repeat center;
  background-size: cover;
`

const Navigation = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  flex-direction:row;
  width:100vw;
  height:5vh;
  background-color: #222;
`

function App() {
  const [activeApps, setActiveApps] = useState([])

  const closeApp = (name) => {
    let oldApps = [];
    activeApps.forEach( activeApp => {
      if(!(activeApp.name === name)) oldApps.push(activeApp);
    })
    
    setActiveApps(oldApps);
  }

  const isActive = (name) => {
    let found = false;
    activeApps.forEach(activeApp => {
      if(activeApp.name === name) found = true;
    })

    return found;
  }

  const loadApps = () => {
    let views = [];
    myApps.forEach(app => {
      views.push(
        <ExecuteApp 
          isActive={isActive}
          app={app} 
          activeApps={activeApps}
          setActiveApps={setActiveApps}
          />
        )
    })

    return views;
  };
  
  const loadActiveApps = () => {
    let views = [];
    
    activeApps.forEach( activeApp => {     
      views.push(
        <Window 
          app={activeApp}
          closeApp={closeApp}/>
        )
    })

    return views;
  }

  return (
    <AppWrapper>
      <Navigation>
        <HomeButton />
        {loadApps()}
      </Navigation>    
      <HomeBody>
        {loadActiveApps()}
      </HomeBody>
    </AppWrapper>
  );
}

export default App;
