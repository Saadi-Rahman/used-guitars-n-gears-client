import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import logo from '../../assets/icons/logo1.png';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }
    
    const handleSignUp = (data) =>{
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully!')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
                .then(() =>{
                    saveUser(data.name, data.email);
                })
                .catch(error => console.log(error));
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        });
    }

    // save user data to mongoDB
    const saveUser = (name, email) =>{
        const user = {name, email};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
    }
    

    return (
        <div className="hero min-h-screen">
            <div className="card w-full max-w-sm shadow-2xl bg-stone-100">
                <div className="card-body">
                    <div className='w-1/2 mx-auto'>
                        <img src={logo} className="w-full" alt="" />
                    </div>
                    
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control">
                            <label className="label"><span className="label-text text-primary font-oswald">Name</span></label>
                            <input type="text" placeholder="Enter your Name" className="input input-bordered"
                                {...register("name", {
                                    required: "Name is required!"
                                })}
                            />
                            {errors.name && <small className='text-red-500'>{errors.name.message}</small>}
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text text-primary font-oswald">Email</span></label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered"
                                {...register("email", {
                                    required: "Email Address is required!"
                                })} 
                            />
                            {errors.email && <small className='text-red-500'>{errors.email?.message}</small>}
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text text-primary font-oswald">Password</span></label>
                            <input type="password" placeholder="Enter your password" className="input input-bordered"
                                {...register("password", {
                                    required: "Password is required!",
                                    minLength: {value: 6, message: "Password must be 6 characters or longer!"},
                                    pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: "Password must have a special character with a lower case, upper case and a number!"}
                                })} 
                            />
                            {errors.password && <small className='text-red-500'>{errors.password?.message}</small>}
                            {signUpError && <small className='text-red-500'>{signUpError}</small>}
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-primary text-white font-bold tracking-widest" />
                        </div>

                        <label className="label py-0">
                            <small>Already have an Account? <Link to="/login" className="link link-hover text-primary">Please Login</Link></small>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;