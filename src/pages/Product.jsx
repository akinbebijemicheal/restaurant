import React from 'react';
import Navbarr from '../components/Navbarr';
import '../components/product.css';
import '../components/bootstrap-5.1.3-dist/css/bootstrap.min.css'
import apple from '../imgs/apple.jpg';
import brownies from '../imgs/brownies.jpg';
import closepizza from '../imgs/closepizza.jpg'
import greekcheese from '../imgs/greekcheese.jpg';
import salad from '../imgs/salad.jpg';
import vegetarianbagel from '../imgs/vegetarianbagel.jpg';
import sandwich from '../imgs/sandwich.jpg';
import walnutbrownie from '../imgs/walnutbrownie.jpg';


const Product = () => {
  return (
    <div>
        <Navbarr />
        <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5 tmdm">
      <h1 className="display-4 fw-normal white">TastyMeals Daily Make</h1>
      <p className="lead fw-normal white">Below are the delicacies made daily just to water your mouth and as well fill you up</p>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

  <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Apple Cake</h2>
        <p className="lead">And some red apples.</p>
      </div>
      <div className="bg-light shadow-sm mx-auto one" ><img src={apple} className="apple" alt="apple" /></div>
    </div>
    <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Dark Brownies</h2>
        <p className="lead">Dark Chocolate Brownies</p>
      </div>
      <div className="bg-light shadow-sm mx-auto two" ><img src={brownies} className="apple" alt="brownies" /></div>
    </div>
    <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Italian Pizza</h2>
        <p className="lead">Bolognese Sweet Pizza.</p>
      </div>
      <div className="bg-light shadow-sm mx-auto one" ><img src={closepizza} className="apple" alt="closepizza" /></div>
    </div>
    <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Cheese & Honey</h2>
        <p className="lead">Greek Cheese and wild honey.</p>
      </div>
      <div className="bg-light shadow-sm mx-auto two" ><img src={greekcheese} className="apple" alt="greekcheese" /></div>
    </div>
  </div>

  <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Salad</h2>
        <p className="lead">Tabouleh Salad and bread.</p>
      </div>
      <div className="bg-light shadow-sm mx-auto three" ><img src={salad} className="apple" alt="salad" /></div>
    </div>
    <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Bagel</h2>
        <p className="lead">Vegetarian Bagel & Tea.</p>
      </div>
      <div className="bg-light shadow-sm mx-auto four" ><img src={vegetarianbagel} className="apple" alt="vegetarianbagel" /></div>
    </div>
    <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Chocolate Cake</h2>
        <p className="lead">Dark Walnut Brownies</p>
      </div>
      <div className="bg-light shadow-sm mx-auto three" ><img src={walnutbrownie} className="apple" alt="walnutbrownie" /></div>
    </div>
    <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Regular Sandwich</h2>
        <p className="lead">Sandwich, Cheese & Ham.</p>
      </div>
      <div className="bg-light shadow-sm mx-auto four" ><img src={sandwich} className="apple" alt="sandwich" /></div>
    </div>
  </div>

  
        </main>
        <footer class="container py-5">
  <div class="row">
    <div class="col-12 col-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
      <small class="d-block mb-3 text-muted">&copy; 2017–2021</small>
    </div>
    <div class="col-6 col-md">
      <h5>Features</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary" href="#">Cool stuff</a></li>
        <li><a class="link-secondary" href="#">Random feature</a></li>
        <li><a class="link-secondary" href="#">Team feature</a></li>
        <li><a class="link-secondary" href="#">Stuff for developers</a></li>
        <li><a class="link-secondary" href="#">Another one</a></li>
        <li><a class="link-secondary" href="#">Last time</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Resources</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary" href="#">Resource name</a></li>
        <li><a class="link-secondary" href="#">Resource</a></li>
        <li><a class="link-secondary" href="#">Another resource</a></li>
        <li><a class="link-secondary" href="#">Final resource</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Resources</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary" href="#">Business</a></li>
        <li><a class="link-secondary" href="#">Education</a></li>
        <li><a class="link-secondary" href="#">Government</a></li>
        <li><a class="link-secondary" href="#">Gaming</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>About</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary" href="#">Team</a></li>
        <li><a class="link-secondary" href="#">Locations</a></li>
        <li><a class="link-secondary" href="#">Privacy</a></li>
        <li><a class="link-secondary" href="#">Terms</a></li>
      </ul>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Product