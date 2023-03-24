
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Herosection from './components/Herosection';
import Highlights from './components/Highlights';
import Testimonial from './components/Testimonials';

function App() {
  return (
    <div className="App">
      
      <NavbarComp/>
        <Herosection/>
        <Highlights/>
        <Testimonial/>
    </div>
  );
}

export default App;
