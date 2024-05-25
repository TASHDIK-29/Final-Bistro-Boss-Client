import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/Shared/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {

    const categories = ['pizza', 'soup', 'dessert', 'drinks', 'salad'];

    const item = useLoaderData();
    console.log(item);
    const {name, category, recipe, price, _id} = item;
    console.log(name, category, price); 


    const axiosSecure = useAxiosSecure();


    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {

        // by this data.image[0] i have to make conditional to update image
        console.log(data.image[0])

        // image upload to img bb 
        // const imageFile = { image: data.image[0] }
        // console.log(imageFile);
        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });
        const formData = new FormData();
        // console.log(data.image);
        formData.append('image', data.image[0])
        console.log(formData);

        fetch(image_hosting_api, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((res) => {
                console.log(res.data.display_url);
                if (res.success) {
                    // now sent menu to server with image url.
                    const menuItem = {
                        name: data.name,
                        category: data.category,
                        price: parseFloat(data.price),
                        recipe: data.recipe,
                        image: res.data.display_url
                    }

                    axiosSecure.patch(`/menu/${_id}`, menuItem)
                        .then(menuRes => {
                            console.log(menuRes.data);
                            if (menuRes.data.modifiedCount) {
                                // reset();
                                Swal.fire({
                                    position: "top-center",
                                    icon: "success",
                                    title: "Menu is Updated Successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })


                }
                // console.log(res)
            })
        // console.log(res.data);
    }


    return (
        <div>
            <SectionTitle heading={'Refresh Menu'} subHeading={"Update Item"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input {...register("name")} /> */}

                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe name</span>
                        </div>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Type here"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full" />

                    </label>

                    <div className="flex gap-6">
                        {/* Category */}

                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <select  {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                {/* <option disabled value="default">Select a Category</option> */}

                                {
                                    categories.map(item => <option key={item} selected={category === item} 
                                    value={item}>{item}</option>)
                                }



                                {/* <option value="Salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option selected value="Desert">Desert</option>
                                <option value="Soup">Soup</option>
                                <option value="Drinks">Drinks</option> */}
                            </select>

                        </label>

                        {/* price */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input
                                type="number"
                                defaultValue={price}
                                placeholder="Type here"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Your bio</span>
                        </div>
                        <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                    </label>

                    <div className="form-control w-full my-6">
                        <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">Update Item <FaUtensils></FaUtensils></button>

                    {/* <select {...register("category")}
                        className="select select-bordered w-full">
                        <option disabled selected>Select a Category</option>
                        <option value="Salad">Salad</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Desert">Desert</option>
                        <option value="Soup">Soup</option>
                        <option value="Drinks">Drinks</option>
                    </select> */}

                    {/* <input type="submit" /> */}
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;