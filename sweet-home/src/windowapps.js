
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
    },
    {
        name: "LoveConnect",
        icon: IconLoveConnect,
        component: <LoveConnectApp />,
    },
    {
        name: "EduPrim",
        icon: IconEduPrim,
        component: <EduPrimApp />,
    },
    {
        name: "Factory IDLE",
        icon: IconIDLE,
        component: <FactoryIDLEApp />,
    },
    {
        name: "Picolo Pomdoro",
        icon: IconPomodoro,
        component: <PicoloPomodoroApp />,
    },
    {
        name: "Experimental",
        icon: IconLaboratory,
        component: <PlayedWithApp />,
    },
    {
        name:"About me",
        icon:IconInfo,
        component: <AboutMeApp />,
    },
    {
        name:"Configuration",
        icon:IconConfig,
        component: <ConfigApp />,
    }
]

export default myApps;