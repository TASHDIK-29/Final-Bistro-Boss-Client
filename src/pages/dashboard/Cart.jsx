import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../components/Shared/SectionTitle";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {

    const axiosSecure = useAxiosSecure();

    const [cart, refetch] = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handelDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {



                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {

                            // load again
                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }

    return (
        <div>
            <SectionTitle heading={'My Cart'} subHeading={'Wanna Add More ?'}></SectionTitle>
            <div className="flex justify-between mb-12">
                <h1 className="text-3xl font-semibold">Items : {cart.length}</h1>
                <h1 className="text-3xl font-semibold">Total Price : {totalPrice}</h1>

                {cart.length ? <Link to='/dashboard/payment'><button className="p-2 bg-orange-400 rounded-md">PAY</button></Link>
                    : <button disabled className="p-2 bg-orange-400 rounded-md">PAY</button>
                }
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-slate-300/25">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => handelDelete(item._id)} className="btn btn-ghost btn-xs"><FaTrashAlt className="text-lg text-orange-600"></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;