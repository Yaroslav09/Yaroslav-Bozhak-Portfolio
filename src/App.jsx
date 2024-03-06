import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import ContactUs from './components/ContactUs/ContactUs';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return( 
    <Router>
      <Header />
      <Routes>                
        <Route exact path="/Yaroslav-Bozhak-Portfolio/" element={<Home />} />  
        <Route path="/Yaroslav-Bozhak-Portfolio/about" element={<About />} />
        <Route path="/Yaroslav-Bozhak-Portfolio/portfolio" element={<Portfolio />} />     
        <Route path="/Yaroslav-Bozhak-Portfolio/contact" element={<ContactUs />} />  
      </Routes>
    </Router>  
  );
}
export default App
