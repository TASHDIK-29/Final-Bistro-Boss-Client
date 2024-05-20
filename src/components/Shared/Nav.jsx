import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

const Nav = () => {

    const { user, logoutUser } = useContext(AuthContext);

    const handelLogout = () =>{
        logoutUser()
        .then(() =>{
            alert('User logged out');
        })
    }

    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order Food</NavLink></li>


        {
            user ? <>
            <p className="text-white font-bold">{user?.displayName}</p>
                <button onClick={handelLogout} className="relative px-6 py-3 font-bold text-black group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-slate-400 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                    <span className="relative">Logout</span>
                </button>
            </> : <>
                <li><NavLink to='/login'>Login</NavLink></li>
            </>
        }

    </>
    return (
        <div className="navbar fixed  bg-black opacity-80 z-10 text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Nav;