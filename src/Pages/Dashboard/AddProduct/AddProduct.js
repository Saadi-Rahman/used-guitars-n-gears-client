import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const handleAddProduct = data =>{
        console.log(data);
        const image = data.image_url[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const newProduct = {
                    title: data.title,
                    resale_price: data.resale_price,
                    original_price: data.original_price,
                    year_of_purchase: data.year_of_purchase,
                    years_of_use: data.years_of_use,
                    condition: data.condition,
                    condition_type: data.condition_type,
                    seller_name: data.seller_name,
                    seller_phone: data.seller_phone,
                    location: data.location,
                    posted_time: data.posted_time,
                    description: data.description,
                    image_url: imgData.data.url
                }

                // save newProduct info to MongoDB
                fetch('http://localhost:5000/newProducts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(newProduct)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.title} is added successfully!`);
                    navigate('/dashboard/myProducts');
                })
            }
        })
    }


    return (
        <div>
            <div className='flex justify-between'>
                <h4 className='text-lg text-primary font-bold font-oswald uppercase mb-4'>Add Product</h4>
                <label htmlFor="category-drawer-2" className="btn btn-sm btn-primary btn-outline drawer-button rounded font-oswald lg:hidden">Dashboard Menu</label>
            </div>
            <div className="card rounded-lg w-full max-w-xl shadow-xl bg-stone-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleAddProduct)} className="">
                        <div className="form-control">
                            <label className="label"><span className="label-text font-oswald text-primary">Product Name</span></label>
                            <input type="text" placeholder="Enter your Products' Name" className="input input-bordered"
                                {...register("title", {
                                    required: "Product Name is Required!"
                                })}
                            />
                            {errors.title && <small className='text-red-500'>{errors.title.message}</small>}
                        </div>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-oswald text-primary">Resale Price</span></label>
                                <input type="text" placeholder="Enter resale price" className="input input-bordered"
                                    {...register("resale_price", {
                                        required: "Resale Price is Required!"
                                    })}
                                />
                                {errors.resale_price && <small className='text-red-500'>{errors.resale_price.message}</small>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-oswald text-primary">Original Price</span></label>
                                <input type="text" placeholder="Enter the Original price" className="input input-bordered"
                                    {...register("original_price", {
                                        required: "Original Price is Required!"
                                    })}
                                />
                                {errors.original_price && <small className='text-red-500'>{errors.original_price.message}</small>}
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-oswald text-primary">Year of Purchase</span></label>
                                <input type="text" placeholder="Year of purchase" className="input input-bordered"
                                    {...register("year_of_purchase", {
                                        required: "Year is Required!"
                                    })}
                                />
                                {errors.year_of_purchase && <small className='text-red-500'>{errors.year_of_purchase.message}</small>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-oswald text-primary">Years of Use</span></label>
                                <input type="text" placeholder="Years of Use" className="input input-bordered"
                                    {...register("years_of_use", {
                                        required: "Year is Required!"
                                    })}
                                />
                                {errors.years_of_use && <small className='text-red-500'>{errors.years_of_use.message}</small>}
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-oswald text-primary">Product Condition</span></label>
                                <input type="text" placeholder="Used or New?" className="input input-bordered"
                                    {...register("condition", {
                                        required: "Product Condition is Required!"
                                    })}
                                />
                                {errors.condition && <small className='text-red-500'>{errors.condition.message}</small>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-oswald text-primary">Condition type</span></label>
                                <input type="text" placeholder="Excellent, Good, Fair, Poor..." className="input input-bordered"
                                    {...register("condition_type", {
                                        required: "Condition type is Required!"
                                    })}
                                />
                                {errors.condition_type && <small className='text-red-500'>{errors.condition_type.message}</small>}
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-oswald text-primary">Seller Name</span></label>
                                <input type="text" placeholder="Used or New?" className="input input-bordered"
                                    {...register("seller_name", {
                                        required: "Seller name is Required!"
                                    })}
                                />
                                {errors.seller_name && <small className='text-red-500'>{errors.seller_name.message}</small>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-oswald text-primary">Phone</span></label>
                                <input type="text" placeholder="Enter your phone number" className="input input-bordered"
                                    {...register("seller_phone", {
                                        required: "Phone number is Required!"
                                    })}
                                />
                                {errors.seller_phone && <small className='text-red-500'>{errors.seller_phone.message}</small>}
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-oswald text-primary">Seller Location</span></label>
                                <input type="text" placeholder="Enter your location" className="input input-bordered"
                                    {...register("location", {
                                        required: "Location is Required!"
                                    })}
                                />
                                {errors.location && <small className='text-red-500'>{errors.location.message}</small>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-oswald text-primary">Posted Date</span></label>
                                <input type="text" placeholder="Enter posted Date" className="input input-bordered"
                                    {...register("posted_time", {
                                        required: "Date is Required!"
                                    })}
                                />
                                {errors.posted_time && <small className='text-red-500'>{errors.posted_time.message}</small>}
                            </div>
                        </div>
                        
                        <div className='form-control'>
                            <label className="label"><span className="label-text font-oswald text-primary">Product Description</span></label>
                            <textarea className="textarea textarea-bordered w-full" placeholder="Give a complete description of your product" 
                                {...register("description", {
                                    required: "Description is required!"
                                })}
                            />
                            {errors.description && <small className='text-red-500'>{errors.description.message}</small>}
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text font-oswald text-primary">Product Image</span></label>
                            <input type="file"
                                {...register("image_url", {
                                    required: "Product Image is required!"
                                })}
                            />
                            {errors.image_url && <small className='text-red-500'>{errors.image_url.message}</small>}
                        </div>
                        
                        <div className="form-control mt-6">
                            <input type="submit" value="Add Product" className="btn btn-outline btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;