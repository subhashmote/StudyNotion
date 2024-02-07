import React from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = (props) => {
    let isLogedIn = props.isLogedIn;
    let setIsLogedIn = props.setIsLogedIn;


    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

            {/* logo of the Studynotion  */}
            <Link to='/'>
                <h2 className='text-2xl font-bold text-white'>StudyNotion</h2>
            </Link>

            {/* links for the pages in our website */}
            <nav>
                <ul className='flex gap-x-6 text-white'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>

            </nav>

            {/* login - signup - log out - dashboard  */}

            <div className='flex items-center gap-x-4'>
                { !isLogedIn && 
                    <Link to="/login">
                        <button className='bg-slate-800 text-white opacity-80 px-3 py-1 rounded-md border-none font-bold'>
                            Login
                        </button>
                    </Link>
                }
                { !isLogedIn && 
                    <Link to="/signup">
                        <button className='bg-slate-800 text-white opacity-80 px-3 py-1 rounded-md border-none font-bold'>
                            Sign up
                        </button>
                    </Link>
                }
                { isLogedIn &&
                    <Link to="/">
                        <button onClick={()=>{
                            setIsLogedIn(false);
                            toast.success("Logged Out");
                        }}  className='bg-slate-800 text-white opacity-80 px-3 py-1 rounded-md border-none font-bold'>
                            Log out
                        </button>
                    </Link>
                }
                { isLogedIn && 
                    <Link to="/dashboard">
                        <button  className='bg-slate-800 text-white opacity-80 px-3 py-1 rounded-md border-none font-bold'>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>


        </div>
    )
}

export default Navbar