import Home from "./RouterMain/HomeRouter";
import Login from './RouterLogin/LogRouter';
import Sign from './RouterSign/SignUpRouter';
import Find from './RouterFind/FindRouter';
import Intro from './RouterInto/IntroRouter';
import Info from './RouterInfo/InfoRouter';
import Vehicle from './RouterVehicle/VehicleRouter';
import InVehicle from './RouterVehicle/InVehicleRouter';
import InVehicleTwo from './RouterVehicle/InVehicleTwoRouter';
import HanbitBoard from './RouterHanbit/HanbitRouter';
import InHanbitBoard from './RouterHanbit/InHanbitRouter';
import Notice from './RouterNotice/NoticeRouter';
import QnA from './RouterQnA/QnARouter';

var routes = [
 {
     exact:true,
     path:"/",
     component:Home,
     menuName:"Home"
    
 },
 {
    path:"/Login",
    component:Login,
    menuName:"Login"
   
},
{
    path:"/Sign",
    component:Sign,
    menuName:"Sign"
   
},
{
    path:"/Find",
    component:Find,
    menuName:"Find"
   
},
{
    path:"/Intro",
    component:Intro,
    menuName:"Intro"
   
},
{
    path:"/Info",
    component:Info,
    menuName:"Info"
   
},

{
    path:"/Vehicle",
    component:Vehicle,
    menuName:"Vehicle"
   
},
{
    path:"/InVehicle",
    component:InVehicle,
    menuName:"InVehicle"
   
},
{
    path:"/InVehicleTwo",
    component:InVehicleTwo,
    menuName:"InVehicleTwo"
   
},
{
    path:"/HanbitBoard",
    component:HanbitBoard,
    menuName:"HanbitBoard"
   
},
{
    path:"/InHanbitBoard",
    component:InHanbitBoard,
    menuName:"InHanbitBoard"
   
},
{
    path:"/Notice",
    component:Notice,
    menuName:"Notice"
   
},
{
    path:"/QnA",
    component:QnA,
    menuName:"QnA"
   
},

 
];

var pages = (role) => {
    return routes.filter((r) => {
        return !r.role || r.role === role;
    })
}

export default pages;