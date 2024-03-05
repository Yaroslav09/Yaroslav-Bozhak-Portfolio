// import { Route, Routes } from 'react-router-dom'
// import CardProject from './components/CardProject';
// import Header from './components/Header';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

// function App() {

//   return( 
//     <>
//       <Routes>
//         <Route path="/" element={<Header />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="project" element={<CardProject />} />         
//         </Route>
//       </Routes>
//     </>  
//   );
// }
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return( 
    <Router>
      <Header />
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />      
      </Routes>
    </Router>  
  );
}
export default App
