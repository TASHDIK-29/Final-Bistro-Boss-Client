import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/Shared/SectionTitle";

const PaymentHistory = () => {

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)

            return res.data;
        }
    })
    return (
        <div>
            <SectionTitle heading={'At A Glance'} subHeading={'Payment History'}></SectionTitle>
            <div>
                <h1 className="text-2xl font-semibold">Total Payments : {payments.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Transaction ID</th>
                                <th>Total Price</th>
                                <th>Payment Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>{item?.email}</td>
                                    <td>{item?.transactionId}</td>
                                    <td>{item?.price}</td>
                                    <td>{item?.date}</td>
                                    <td><p className="bg-orange-400 py-1 px-2 text-center text-black font-semibold rounded-md">{item?.status}</p></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;