import Dashboard from '../components/view/Dashboard'
import LogicalView from '../components/view/LogicalView'
import Settings from '../components/view/Settings.vue'
import AlarmList from "../components/view/Alarmlist"
import Devices from "../components/view/Devices"
import BacnetView from "../components/view/BacnetView"

// routes[] with all the different views.
// @author Vogt Andreas,Daniel Reiter, Rafael Grimm
// @version 1.0
export const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
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
        path: '/logicalview',
        name: 'logicalview',
        component: LogicalView
    },
    {
        path: '/devices',
        name: 'devices',
        component: Devices
    },
    {
        path: '/bacnetview',
        name: 'bacnetView',
        component: BacnetView
    },

];

export default routes
