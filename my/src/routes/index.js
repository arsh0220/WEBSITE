import Home from '../components/home';
import About from '../components/about';
import Services from '../components/services';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import Head from '../components/Head';
import Toolbox from '../components/toolbox';
import Login from '../components/login';
import Signup from '../components/signup';

export const AdminRoutes = [
    { path: "/footer", Component: Footer },
    { path: "/sidebar", Component: Sidebar},
    {path:"/head",Component:Head}   
];

export const UserRoutes = [
    { path: "/home", Component: Home },
    { path: "/about", Component: About},
    { path: "/services", Component: Services },
    { path: "/toolbox", Component: Toolbox },
    // { path: "/login", Component: Login },
    // { path:"/signup",Component:Signup }
]
export const publicRoutes = [
    // { path: "/login", Component: Login },
    // { path:"/signup",Component:Signup }
]