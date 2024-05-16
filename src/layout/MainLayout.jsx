import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Nav from "../components/Shared/Nav";

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;