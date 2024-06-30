import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-black text-gray-300 z-50'>
      <div>
        <img src={Logo} alt="logo image" style={{width: '80px'}} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li className='mx-4'>
            <Link  to="home" smooth={true} duration={500}>
                    Home
            </Link>        
        </li>
        <li className='mx-4'>
            <Link  to="about" smooth={true} duration={500}>
                    About
            </Link>         
        </li>
        <li className='mx-4'>
            <Link  to="Terms and Conditions" smooth={true} duration={500}>
                    Terms and Conditions
            </Link> 
        </li>
        <li className='mx-4'>
            <Link  to="Make a booking" smooth={true} duration={500}>
                    Make a booking
            </Link> 
        </li>
        <li className='mx-4'>
            <Link  to="The Academy" smooth={true} duration={500}>
                    The Academy
            </Link> 
        </li>
        <li className='mx-4'>
            <Link  to="Client Cam" smooth={true} duration={500}>
                    Client Cam
            </Link> 
        </li>
      </ul>

      {/*Hamburger*/}
      <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/*Mobile menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#E5E7EB] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
                    Home
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
                    About
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="Terms and Conditons" smooth={true} duration={500}>
                    Terms and Conditions
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="Make a booking" smooth={true} duration={500}>
                    Make a booking
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="The Academy" smooth={true} duration={500}>
                    The Academy
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="Client Cam" smooth={true} duration={500}>
                    Client Cam
            </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
