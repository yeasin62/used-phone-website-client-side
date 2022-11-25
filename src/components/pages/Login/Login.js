import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
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