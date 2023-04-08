
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Herosection from './components/Herosection';
import Highlights from './components/Highlights';
import Testimonial from './components/Testimonials';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
import Modal from './components/Modal'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirm from './components/Confirm'

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
        <BrowserRouter>
      <Routes>
        <Route path="/confirm" element={<Confirm />}>
         
        
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
