import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";


const Template = ({title,desc1,desc2,image,formType,setIsLogedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-evenly'>
        <div className='w-11/12 max-w-[450px]'>
            <h1 
            className='text-[1.875rem] font-semibold text-white leading-[2.375rem]'
            >{title}</h1>

            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-white opacity-30'>{desc1}</span>
                <br></br>
                <span className='text-blue-300 italic'>{desc2}</span>
            </p>

            {formType === "signup" ?
            (<SignupForm setIsLogedIn={setIsLogedIn}/>):
            (<LoginForm setIsLogedIn={setIsLogedIn}/>)
            }

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] bg-black w-full'></div>
                <p className='font-medium text-white opacity-20'>OR</p>
                <div className='h-[1px] bg-black w-full'></div>
            </div>


            <button className='flex w-full justify-center items-center rounded-[8px] font-medium text-white border border-white px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>Sign Up With Google</p>
            </button>

        </div>

        <div className='p-6'>
            <img src={image} width={300} height={600} loading='lazy' className='rounded-md h-[400px] w-[400px]'/>
        </div>
    </div>
  )
}

export default Template