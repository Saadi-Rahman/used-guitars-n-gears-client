import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logo from '../../assets/icons/logo1.png';

const Login = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    
    const handleLogin = data =>{
        console.log(data);
    }

    return (
        <div className="hero min-h-screen">
            <div className="card w-full max-w-sm shadow-2xl bg-stone-100">
                <div className="card-body">
                    <div className='w-1/2 mx-auto'>
                        <img src={logo} className="w-full" alt="" />
                    </div>
                    
                    <form onSubmit={handleSubmit(handleLogin)}>
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
                                    minLength: {value: 6, message: "Password must be 6 characters or longer!"}
                                })} 
                            />
                            {errors.password && <small className='text-red-500'>{errors.password?.message}</small>}
                            {/* {loginError && <small className='text-red-500'>{loginError}</small>} */}
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary text-white font-oswald tracking-widest" />
                        </div>

                        <label className="label py-0">
                            <small>New to Used Guitars N Gears? <Link to="/signup" className="link link-hover text-primary">Create an Account</Link></small>
                        </label>
                    </form>

                    <div className="divider my-0 font-oswald">OR</div>

                    <div className="form-control mt-2">
                        <button className="btn btn-outline btn-ghost font-oswald tracking-wider"> <FaGoogle className='mr-2' /> Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;