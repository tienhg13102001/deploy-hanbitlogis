import Home from "./RouterMain/HomeRouter";


var routes = [
 {
     exact:true,
     path:"/",
     component:Home,
     menuName:"Home"
    
 }

 
];

var pages = (role) => {
    return routes.filter((r) => {
        return !r.role || r.role === role;
    })
}

export default pages;