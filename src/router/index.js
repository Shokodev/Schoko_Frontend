import Home from '../components/Menu'
import Structure from '../components/view/StructureView'
import Settings from '../components/view/Settings.vue'
import AlarmList from "../components/view/Alarmlist"
import Devices from "../components/view/Devices";

// routes[] with all the different views.
// @author Vogt Andreas,Daniel Reiter, Rafael Grimm
// @version 1.0
export const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/alarmlist',
        name: 'alarmlist',
        component: AlarmList,
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings,
    },
    {
        path: '/structure',
        name: 'structure',
        component: Structure
    },
    {
        path: '/devices',
        name: 'devices',
        component: Devices
    }
];

export default routes
