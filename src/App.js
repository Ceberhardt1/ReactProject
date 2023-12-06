
import './App.css';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import About from './Components/About';
import NavBar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element= {<><NavBar/><Header headingnames ="Home Section"/><MainSection/></>}/>
    <Route path='/about' element= {<><NavBar/><Header headingnames ="About Section"/><About/></>}/>
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
