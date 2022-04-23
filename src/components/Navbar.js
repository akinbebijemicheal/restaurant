import React from 'react'
import './navbar.css'
import {
    Link
  } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>TastyMeals</span>
     
         <Link to='/' className='navlink1'>Home</Link>
      
         <Link to='/About' className='navlink2'>About</Link>
      
         <Link to="/Contact" className='navlink3'>Contact</Link>
        
         <Link to="/Product" className='navlink4'>Product</Link>

         <button className='button'><Link to="/Product" className='buttonlink'>Book a Table</Link></button>
       
    </div>
  )
}

export default Navbar