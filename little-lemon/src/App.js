
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Herosection from './components/Herosection';
import Highlights from './components/Highlights';
import Testimonial from './components/Testimonials';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
import Modal from './components/Modal'
import Confirm from './components/Confirm'
import { Routes,
  Route,
  } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      
      <NavbarComp/>
        <Herosection/>
       <Modal/>
      
        <Highlights/>
        <Testimonial/>
        <Aboutme/>
        <Footer/>
        
        <Routes>
        <Route path="/" component={Modal} exact />
        <Route path="/confirm" component={Confirm} exact />
      </Routes>
    
    </div>
     
  );
}

export default App;
