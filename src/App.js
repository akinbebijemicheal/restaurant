
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';


function App() {
  return (
    
    
    
  
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Product' element={<Product />} />

    </Routes>

    
    
  );
}

export default App;
