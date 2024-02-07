import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/student.jpg'

const Login = ({setIsLogedIn}) => {
  return (
    <Template
    title="Welcome Back"
    desc1="Build Skill for today,tommorow and beyond"
    desc2="Education to future-proof your career"
    image={loginImg}
    formType='login'
    setIsLogedIn={setIsLogedIn}
    />
  )
}

export default Login