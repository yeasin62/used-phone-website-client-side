import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/AuthProvider';
import useToken from '../../../Hooks/useToken';

const Signup = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {createUser,updateUserProfile} = useContext(authContext);
    const [signupError, setSignupError] = useState('');
    
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    const navigate = useNavigate();


    if(token){
        navigate('/');
    }
    const handleSignup = data => {
        setSignupError('');
        createUser(data.email,data.password,data.seller)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast("User Created successfully");
            const createUserToDB = {
                userName: data.name,
                userEmail: data.email,
                sellerAccount: data.seller
            }
            fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(createUserToDB)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
        })


            const userInfo = {
                displayName: data.name,
            }
            updateUserProfile(userInfo)
            .then(()=> {
                setCreatedUserEmail(data.email);
                // getUserToken(data.email);
                //navigate('/');
                //console.log(data.email);
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
    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if(data.accessToken){
    //             localStorage.setItem('accessToken', data.accessToken);
    //             navigate('/');
    //         }
    //     })
    // }
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