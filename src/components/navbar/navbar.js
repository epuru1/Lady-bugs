import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import img from "./image.jpg"



function Navbar(){
    return (
        <div className='contain'>
        <nav>
        <a href="#" class="navbar-brand "><img className="w-20 h-50"src={img}/></a>
            
            
            
            
        <div className='links'>
                <Link to="/" className='link' >Home</Link>
                <a href='#' className='text-light'>Contact-Us</a>
                <a href='#' className='text-light'>About-us</a>
                <Link to="/login" className='link' >Login</Link>
           </div>
        </nav>
             
        
        </div>
        
    )
}


export default Navbar