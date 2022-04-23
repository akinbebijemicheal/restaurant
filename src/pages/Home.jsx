import React from 'react';
import Navbar from '../components/Navbar';
import '../components/home.css';
import food from '../food.jpg';
import {
  Link
} from 'react-router-dom';

const Home = () => {
  return (
    <div className='containerr'>
      <img src={food} className="food" alt="food" />
      <div className="containerrchild">
        <Navbar />
        <h3 className='h32'>Enjoy your Healthy Delicious Meal</h3>
        <h1 className='h11'>Treat Yourself</h1>
        <h3 className='h33'>Not just you Regular Restaurant, we aim at giving out delicacies at very low prices.</h3>
        <h3 className='h333'>You've got a smartphone, we've got a restaurant just visit the website and order yourself a delicacy.</h3>
        <button className='buttonn'><Link to="/Product" className='buttonnlink'>Explore now</Link></button>

      </div>
      
    </div>
  )
}

export default Home