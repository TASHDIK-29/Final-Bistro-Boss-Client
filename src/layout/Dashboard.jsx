import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCartArrowDown, FaHome, FaList, FaSearch, FaStar } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import useCart from "../hooks/useCart";

const Dashboard = () => {

    const [cart] = useCart();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="pl-4">
                    <li className="flex items-center gap-2 p-4"><FaHome /><NavLink to='/dashboard/userHome'>User Home</NavLink></li>
                    <li className="flex items-center gap-2 p-4"><FaCalendar /><NavLink to='/dashboard/userReservation'>Reservation</NavLink></li>
                    <li className="flex items-center gap-2 p-4"><FaMoneyBill /><NavLink to='/dashboard/userPayment'>Payment History</NavLink></li>
                    <li className="flex items-center gap-2 p-4"><FaCartArrowDown /><NavLink to='/dashboard/userCart'>My Cart({cart.length})</NavLink></li>
                    <li className="flex items-center gap-2 p-4"><FaStar /><NavLink to='/dashboard/userAddReview'>Add Review</NavLink></li>
                    <li className="flex items-center gap-2 p-4"><FaList /><NavLink to='/dashboard/myBookings'>My Bookings</NavLink></li>
                </ul>
                <div className="divider p-4"></div>
                <ul className="pl-4">
                    <li className="flex items-center gap-2 p-4"><FaHome /><NavLink to='/'>Home</NavLink></li>
                    <li className="flex items-center gap-2 p-4"><MdOutlineRestaurantMenu /><NavLink to='/menu'>Menu</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 px-10 py-2">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;