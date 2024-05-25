import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })


    const handelMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data);

            if(res.data.modifiedCount){

                refetch();

                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${user.name} is Admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handelDelete = user => {
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

                axiosSecure.delete(`/users/${user._id}`)
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
        <div className="p-6">
            <div>
                <h1 className="text-3xl font-bold">Total User : {users.length}</h1>
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="bg-slate-300/25">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? <span className="text-xl font-bold text-orange-500">Admin</span> :<button onClick={() => handelMakeAdmin(user)} className="btn btn-ghost btn-xs"><FaUsers className="text-lg text-orange-600"></FaUsers></button>}
                                    </td>
                                    <td>
                                        <button onClick={() => handelDelete(user)} className="btn btn-ghost btn-xs"><FaTrashAlt className="text-lg text-orange-600"></FaTrashAlt></button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;