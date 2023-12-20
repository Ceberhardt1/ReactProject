
import './App.css';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import About from './Components/About';
import NavBar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Demo from './Components/Demo';
import Demo3 from './Components/Demo3';
import Quotes from './Components/Quotes';
import Products from './Components/Products';

function App() {
  return (
  <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element= {<><NavBar/><Header headingnames ="Home Section"/><MainSection/></>}/>
    <Route path='/about' element= {<><NavBar/><Header headingnames ="About Section"/><About/></>}/>
    <Route path='/contact' element= {<><NavBar/><Header headingnames ="Contact"/><Contact/></>}/>
    <Route path='/demo' element= {<><NavBar/><Header headingnames ="Demo"/><Demo/></>}/>
    <Route path='/demo3' element= {<><NavBar/><Header headingnames ="Demo3"/><Demo3/></>}/>
    <Route path='/quotes' element= {<><NavBar/><Header headingnames ="Quotes"/><Quotes/></>}/>
    <Route path='/products' element= {<><NavBar/><Header headingnames ="Products"/><Products/></>}/>
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
