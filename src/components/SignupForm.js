import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLogedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword,setshowConfirmPassword] = useState(false);
    const [accountType,setAccountType] = useState("student")

    function changeHandler(event) {
        setFormData((prevFormData) => (
            {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();

        if (formData.password !== formData.confirmpassword) {
            toast.error("Password do not match");
            return;
        }

        setIsLogedIn(true);
        toast.success("Account Created");

        navigate("/dashboard");

    }

    return (
        <div>
            {/* student - instructor tab  */}
            <div className='flex bg-slate-800 p-1 my-6 rounded-full gap-x-1 max-w-max'>
                <button 
                className={`${accountType === "student"
                ? "bg-slate-900 text-white"
                : "bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("student")}>
                    Student
                </button>
                <button
                className={`${accountType === "instructor"
                ? "bg-slate-900 text-white"
                : "bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("instructor")}>
                    Instructor
                </button>
            </div>


            <form onSubmit={submitHandler}>
                {/* firstname and lastname  */}
                <div className='flex justify-between mt-[10px]'>
                    <label>
                        <p className='text-white mb-1 text-[0.875rem] leading-[1.375rem]'>First Name <sup className='text-red-500'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstname}
                            className='w-full p-[12px] bg-slate-800 text-white rounded-[0.3rem]'
                        />
                    </label>

                    <label>
                        <p className='text-white mb-1 text-[0.875rem] leading-[1.375rem]'>Last Name <sup className='text-red-500'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastname}
                            className='w-full p-[12px] bg-slate-800 text-white rounded-[0.3rem]'
                        />
                    </label>
                </div>

                {/* email address  */}
                <div className='mt-[10px]'>
                    <label className='w-full '>
                        <p className='text-white mb-1 text-[0.875rem] leading-[1.375rem]'>Email Address <sup className='text-red-500'>*</sup></p>
                        <input
                            required
                            type='email'
                            name='email'
                            onChange={changeHandler}
                            placeholder='Enter Email Address'
                            value={formData.email}
                            className='w-full p-[12px] bg-slate-800 text-white rounded-[0.3rem]'
                        />
                    </label>
                </div>


                {/* password and confirmpassword  */}


                <div className='flex justify-between mt-[10px]'>
                    <label className='relative'>
                        <p className='text-white mb-1 text-[0.875rem] leading-[1.375rem]'>Create Password<sup className='text-red-500'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ('text') : ('password')}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className='w-full p-[12px] bg-slate-800 text-white rounded-[0.3rem]'
                        />

                        <span
                            className='absolute right-3 top-[38px] cursor-pointer '
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                        </span>

                    </label>


                    <label className='relative'>
                        <p className='text-white mb-1 text-[0.875rem] leading-[1.375rem]'>Confirm Password<sup className='text-red-500'>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? ('text') : ('password')}
                            name='confirmpassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmpassword}
                            className='w-full p-[12px] bg-slate-800 text-white rounded-[0.3rem]'
                        />

                        <span
                            className='absolute right-3 top-[38px] cursor-pointer '
                            onClick={() => setshowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>

                <button className='w-full bg-yellow-400 text-black px-4 py-2 border-none rounded-md mt-6 font-bold'>
                    Create Account
                </button>


            </form>
        </div>
    )
}

export default SignupForm