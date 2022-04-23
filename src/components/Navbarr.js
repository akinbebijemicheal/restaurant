import React from 'react'
import './navbarr.css'
import {
    Link
  } from 'react-router-dom';

const Navbar2 = () => {
  return (
        <div className='navbarr'>
        <span className='logo2'>TastyMeals</span>
     
         <Link to='/' className='navlink11'>Home</Link>
      
         <Link to='/About' className='navlink22'>About</Link>
      
         <Link to="/Contact" className='navlink33'>Contact</Link>
        
         <Link to="/Product" className='navlink44'>Product</Link>

         <button className='button'><Link to="/Product" className='buttonlink'>Book a Table</Link></button>
       
    </div>
  )
}

export default Navbar2