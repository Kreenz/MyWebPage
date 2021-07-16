
import IconConfig from "./assets/icons/ic_config.png";
import IconInfo from "./assets/icons/ic_info.png";
import IconZombie from "./assets/icons/ic_zombie.png";
import IconLoveConnect from "./assets/icons/ic_match.png";
import IconLaboratory from "./assets/icons/ic_lab.png";
import IconIDLE from "./assets/icons/ic_idle.png";
import IconPomodoro from "./assets/icons/ic_pomodoro.png";
import IconEduPrim from "./assets/icons/ic_eduprim.png";

//apps
import ZombieApp from "./components/Apps/Zombie/Zombie";
import ConfigApp from "./components/Apps/Config/Config";
import AboutMeApp from "./components/Apps/Aboutme/Aboutme";
import LoveConnectApp from "./components/Apps/LoveConnect/LoveConnect";
import PlayedWithApp from "./components/Apps/PlayedWith/PlayedWith";
import FactoryIDLEApp from "./components/Apps/FactoryIDLE/FactoryIDLE";
import PicoloPomodoroApp from "./components/Apps/PicoloPomdoro/PicoloPomdoro";
import EduPrimApp from "./components/Apps/EduPrim/EduPrim.js";

const myApps = [
    {
        name:"Zombies",
        icon:IconZombie,
        component: <ZombieApp />,
        index: 0,
        display: "flex"
    },
    {
        name: "LoveConnect",
        icon: IconLoveConnect,
        component: <LoveConnectApp />,
        index: 0,
        display: "flex"
    },
    {
        name: "EduPrim",
        icon: IconEduPrim,
        component: <EduPrimApp />,
        display: "flex",
    },
    {
        name: "Factory IDLE",
        icon: IconIDLE,
        component: <FactoryIDLEApp />,
        index: 0,
        display: "flex"
    },
    {
        name: "Picolo Pomdoro",
        icon: IconPomodoro,
        component: <PicoloPomodoroApp />,
        index: 0,
        display: "flex"
    },
    {
        name: "Experimental",
        icon: IconLaboratory,
        component: <PlayedWithApp />,
        index: 0,
        display: "flex"
    },
    {
        name:"About me",
        icon:IconInfo,
        component: <AboutMeApp />,
        index: 0,
        display: "flex"
    },
    {
        name:"Configuration",
        icon:IconConfig,
        component: <ConfigApp />,
        index: 0,
        display: "flex"
    }
]

export default myApps;