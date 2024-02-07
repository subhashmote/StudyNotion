import React from 'react'
import signImg from '../assets/students.jpg'
import Template from '../components/Template'

const Signup = ({setIsLogedIn}) => {
  return (
    <Template
    title="Join the millions learning to code with StudyMotion for free"
    desc1="Build Skill for today,tommorow and beyond"
    desc2="Education to future-proof your career"
    image={signImg}
    formType='signup'
    setIsLogedIn={setIsLogedIn}
    />
  )
}

export default Signup