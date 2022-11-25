import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { authContext } from '../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {userSignIn} = useContext(authContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        userSignIn(data.email,data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success("Login Successful")
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error.message);
            setLoginError(error.message);
        });
    }
    return (
        <div className='flex flex-col justify-center items-center my-20'>
      <div className="w-96 p-8 shadow-xl rounded-3x card ">
      <form onSubmit={handleSubmit(handleLogin)}>
      <h2 className='text-center text-2xl font-bold'>Login</h2>
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
        <input type="password" {...register("password",{required:"Password is required"})} placeholder="Password" className="input input-bordered w-full"/>
        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
        {loginError && <p className='text-red-600'>{loginError}</p>}
     </div>
     <p className='py-2'><Link to={''} className="text-teal-700">Forget password?</Link></p>
      <div>
      </div>
      <input type="submit" className='btn btn-block' />
      <p className='py-2'>New to Doctors Portal? <span><Link  className="text-teal-700" to={'/signup'}>Create new account</Link></span></p>
    </form>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-primary btn-block mt-4">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
    );
};

export default Login;