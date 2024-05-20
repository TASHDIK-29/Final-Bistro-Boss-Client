import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Nav from "../components/Shared/Nav";

const MainLayout = () => {

    const location = useLocation();
    // console.log(location);
    const isLogin = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div>
            {isLogin || <Nav />}
            <Outlet />
            {isLogin || <Footer />}
        </div>
    );
};

export default MainLayout;