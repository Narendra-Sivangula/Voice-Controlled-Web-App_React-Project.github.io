import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { recognition } from './api/voicerecognition';
import Projects from './components/Projects';
import { FaMicrophone } from 'react-icons/fa';
import CopyRights from './components/CopyRights';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [stopReco, setStopReco] = useState(true);
  const [isDarkMode, SetIsDarkMode] = useState(false);
  const [shouldSlideIn, setShouldSlideIn] = useState(false);

  useEffect(() => {
    // Set shouldSlideIn to true after the component has mounted
    setShouldSlideIn(true);
  }, []);

  





  const startRecognition = () => {
    if (!recognition.isStarted) {
      setStopReco(false);
      recognition.start();
    }
  };

  const stopRecognition = () => {
    if (recognition.isStarted) {
      recognition.stop();
      setStopReco(true);
    }
  };

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript;

    if (command.includes('dark mode')){
      SetIsDarkMode(true);
    } else if(command.includes('light mode')){
      SetIsDarkMode(false);
    }

    if (
      command.includes('navigate to') ||
      command.includes('go to')
    ) {
      if (command.includes('home') || command.includes('index')) {
        navigate('/home');
      } else if (command.includes('about') || command.includes('abouts')) {
        navigate('/about');
      } else if (command.includes('contact') || command.includes('contacts')) {
        navigate('/contact');
      } else if (command.includes('project') || command.includes('projects')) {
        navigate('/project');
      }
    } else if (
      command.includes('stop listening') ||
      command.includes('stop recognition') ||
      command.includes('stop recognizing') ||
      command.includes('stop voice controlling') ||
      command.includes('stop voice control')
    ) {
      recognition.stop();
      setStopReco(true);
    }
  };

useEffect(()=>{
  if (isDarkMode){
    document.body.classList.add('dark-mode');
  }else{
    document.body.classList.remove('dark-mode');
  }
},[isDarkMode]);


  recognition.onend = () => {
    if (!stopReco) {
      recognition.start();
    }
  };

  const shouldRenderButton = location.pathname === '/';

  return (
    <div className="App">
     <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}></div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
      {shouldRenderButton && (
        <div className="background-container">
          <div className="low-light-overlay"></div>
          <button
            className={`round-button ${shouldRenderButton ? 'pulse' : ''} ${shouldSlideIn ? 'slide-in' : ''}`}
            onClick={stopReco ? startRecognition : stopRecognition}
          >
            <FaMicrophone />
          </button>
          <div className={`name ${shouldSlideIn ? 'slide-in' : ''}`}>
      Narendra Sivangula
    </div>
    <CopyRights />
        </div>
      )}
      
    </div>
  );
};
 
export default App;