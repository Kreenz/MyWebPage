
import IconConfig from "./assets/icons/ic_config.png";
import IconInfo from "./assets/icons/ic_info.png";
import IconZombie from "./assets/icons/ic_zombie.png";

//apps
import ZombieApp from "./components/Apps/Zombie/Zombie";
import ConfigApp from "./components/Apps/Config/Config";
import AboutMeApp from "./components/Apps/Aboutme/Aboutme";

const myApps = [
    {
        name:"Zombies",
        icon:IconZombie,
        component: <ZombieApp />,
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