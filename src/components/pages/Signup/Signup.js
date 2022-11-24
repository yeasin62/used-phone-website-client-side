import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='flex flex-col justify-center items-center my-20'>
      <div className="w-96 p-8 shadow-xl rounded-3x card ">
      <form>
      <h2 className='text-center text-2xl font-bold'>Sign Up</h2>
      <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" className="input input-bordered w-full"/>
     </div>
      <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="Email" className="input input-bordered w-full"/>
     </div>
      <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="Password" className="input input-bordered w-full"/>
     </div>
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