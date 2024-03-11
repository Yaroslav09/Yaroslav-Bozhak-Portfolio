import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import ContactUs from './components/ContactUs/ContactUs';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<ContactUs />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


// function App() {
//   return( 
//     <Router>
//       <Header />
//       <Routes>                
//         <Route index element={<Home />} />  
//         <Route path="Yaroslav-Bozhak-Portfolio/about" element={<About />} />
//         <Route path="Yaroslav-Bozhak-Portfolio/portfolio" element={<Portfolio />} />     
//         <Route path="Yaroslav-Bozhak-Portfolio/contact" element={<ContactUs />} />  
//       </Routes>
//     </Router>  
//   );
// }
// export default App
