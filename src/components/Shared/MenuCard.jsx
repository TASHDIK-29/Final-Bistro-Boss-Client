import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const MenuCard = ({ item }) => {

    const { user } = useAuth();

    const { recipe, image, price, name, _id } = item;

    const navigate = useNavigate();
    const location = useLocation();

    const axiosSecure = useAxiosSecure();

    // , is needed bcz of array destructuring.
    const [, refetch] = useCart();

    const handelAddToCart = () => {
        // console.log(item);
        if (user) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);

                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the cart to update
                        refetch();
                    }
                })

        }
        else {
            Swal.fire({
                title: "You are not logged in !",
                text: "Please login first to add",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 flex flex-col">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8 flex-1">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-800">{recipe}</p>
                </div>
                <button onClick={handelAddToCart} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide border-b-2 border-yellow-700 rounded-md bg-slate-300/25 text-yellow-600">Add to Cart</button>
            </div>
        </div>
    );
};

export default MenuCard;