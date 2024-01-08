import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



/******Styles  **********/
import './index.css';
/*======================== */
import NavBar from './Components/NavBar/NavBar';
import LandingPage from './Pages/LandingPage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Startup from './Pages/Startup';
import { ChakraProvider } from '@chakra-ui/react';
import StartupsPage from './Pages/StartupsPage';

function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ChakraProvider>
    <div className="App">
   
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/startup/:id" element={<Startup />} />
        <Route path="/startupspage" element={<StartupsPage />} />
      </Routes>
    </Router>


  </div>
    </ChakraProvider>
   
  );
}

export default App;
