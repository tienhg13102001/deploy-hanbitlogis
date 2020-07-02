import Home from "./RouterMain/HomeRouter";
import Login from './RouterLogin/LogRouter';
import Sign from './RouterSign/SignUpRouter';
import Find from './RouterFind/FindRouter';
import Intro from './RouterInto/IntroRouter';
import Policy from './RouterInto/PolicyRouter';
import History from './RouterInto/RouterHistory';
import Map from './RouterMap/MapRouter';
import Info from './RouterInfo/InfoRouter';
import Operation from './RouterInfo/OperationRouter';
import TestGuide from './RouterInfo/TestGuideRouter';

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
    path:"/Policy",
    component:Policy,
    menuName:"Policy"
   
},
{
    path:"/History",
    component:History,
    menuName:"History"
   
},
{
    path:"/Map",
    component:Map,
    menuName:"Map"
   
},
{
    path:"/Info",
    component:Info,
    menuName:"Info"
   
},
{
    path:"/Operation",
    component:Operation,
    menuName:"Operation"
   
},
{
    path:"/TestGuide",
    component:TestGuide,
    menuName:"TestGuide"
   
},


 
];

var pages = (role) => {
    return routes.filter((r) => {
        return !r.role || r.role === role;
    })
}

export default pages;