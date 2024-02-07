import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLogedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevFormData) => (
            {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLogedIn(true);
        toast.success("Logged In");
        navigate('/dashboard');
    }

    return (
        <form onSubmit={submitHandler} className='w-full flex flex-col gap-y-4 mt-2'>
            <label className='w-full'>
                <p className='text-white mb-1 text-[0.875rem] leading-[1.375rem]'>Email Address<sup className='text-red-500'>*</sup></p>
                <input
                    type='email'
                    required
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter Email Address'
                    name='email'
                    className='w-full p-[12px] bg-slate-800 text-white rounded-[0.3rem]'
                ></input>
            </label>

            <label className='relative w-full'>
                <p className='text-white mb-1 text-[0.875rem] leading-[1.375rem]'>Password<sup className='text-red-500'>*</sup></p>
                <input
                    type={showPassword ? ('text') : ('password')}
                    required
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                    className='w-full p-[12px] bg-slate-800 text-white rounded-[0.3rem]'
                ></input>

                <span 
                className='absolute right-3 top-[38px] cursor-pointer '
                onClick={() => setShowPassword((prev) => !prev)} >
                    {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to='#' className='text-xs mt-1 text-blue-300 w-full ml-auto'>Forgot Password</Link>
            </label>

            <button className='w-full bg-yellow-400 text-black px-4 py-1 border-none rounded-md mt-6 font-bold'>
                Sign In
            </button>
        </form>
    )
}

export default LoginForm