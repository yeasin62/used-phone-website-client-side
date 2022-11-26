import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/AuthProvider';

const Signup = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {createUser,updateUserProfile} = useContext(authContext);
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();
    const handleSignup = data => {
        console.log(data);
        setSignupError('');
        createUser(data.email,data.password,data.seller)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast("User Created successfully");
            const userInfo = {
                displayName: data.name,
            }
            updateUserProfile(userInfo)
            .then(()=> {
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            });
        })
        .catch(error => {
            console.error(error.message);
            setSignupError(error.message);

        });
    }
    return (
        <div className='flex flex-col justify-center items-center my-20'>
      <div className="w-96 p-8 shadow-xl rounded-3x card ">
      <form onSubmit={handleSubmit(handleSignup)}>
      <h2 className='text-center text-2xl font-bold'>Sign Up</h2>
      <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Name</span>
        </label>
        <input type="text" {...register("name",{required:"Name is required"})} placeholder="Name" className="input input-bordered w-full"/>
        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
     </div>
      <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input type="email" {...register("email",{required:"Email address is required"})} placeholder="Email" className="input input-bordered w-full"/>
        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
     </div>
      <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input type="password" {...register("password",{required:"Password address is required", minLength:{value: 6, message: "Password must be 6 characters"}})} placeholder="Password" className="input input-bordered w-full"/>
        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
     </div>
        <div className="form-control flex flex-row items-center my-2">
            <input type="checkbox" {...register("seller")} className="checkbox mr-2" value="Seller"/>
            <span className="label-text text-left text-base">Register for Seller Account</span> 
        </div>
        {
            signupError && <p className='text-red-600'>{signupError}</p>
        }
        <p className='py-2'><Link to={''} className="text-teal-700">Forget password?</Link></p>
      <input type="submit" className='btn btn-block' />
      <p className='py-2'>Already have an accout? <span><Link  className="text-teal-700" to={'/login'}>Login</Link></span></p>
    </form>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-primary btn-block mt-4">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
    );
};

export default Signup;