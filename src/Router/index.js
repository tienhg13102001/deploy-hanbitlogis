import Home from "./RouterMain/HomeRouter";
import Login from './RouterLogin/LogRouter';
import Sign from './RouterSign/SignUpRouter';
import Find from './RouterFind/FindRouter';

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
    menuName:"/Login"
   
},
{
    path:"/Sign",
    component:Sign,
    menuName:"/Sign"
   
},
{
    path:"/Find",
    component:Find,
    menuName:"/Find"
   
}

 
];

var pages = (role) => {
    return routes.filter((r) => {
        return !r.role || r.role === role;
    })
}

export default pages;