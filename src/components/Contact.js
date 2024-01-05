import React, { useState, useEffect } from 'react';
import './Contact.css';
import profile from './images/dp (1).jpg';
import { RiDownloadCloud2Fill } from "react-icons/ri";
import resume from './images/Resume.pdf';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";


const Contact = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay (you can remove this in a real application)
    const delay = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(delay); // Cleanup timeout on component unmount
  }, []);
;


  return (
    <div className={`profile-container ${loaded ? 'loaded' : ''}`}>
      <div className={`profile-image-container ${loaded ? 'loaded' : ''}`}>
        <img
          src={profile} // Replace with your image URL
          alt="Profile"
          draggable={false}
          className={`profile-image ${loaded ? 'loaded' : ''}`}
        />
      </div>
      <div className={`profile-name ${loaded ? 'loaded' : ''}`}>
      <h1>Narendra Kumar Sivangula</h1>
      <h2>Student</h2>
      <p className='pclass' style={{fontSize:'30px', marginTop:'20px'}}>I channel my critical thinking skills into crafting seamless <br></br>digital experiences that not only look good but function flawlessly.</p>
      <a
        href={resume}
        download="Narendra_Resume"
        target="_blank"
        rel="noreferrer"
      ><br></br>
        <button className='rbutton'>Resume <RiDownloadCloud2Fill /> </button>
      </a><br></br>
      <div className="social-icons">
          <a href="https://www.linkedin.com/in/narendra95/" target="_blank" rel="noreferrer">
          <FaLinkedinIn className='linkedin' />
          </a>
          <a href="https://github.com/Narendra-Sivangula" target="_blank" rel="noreferrer">
          <FaGithub className='git' />
          </a>
          <a href="https://twitter.com/Narendra_115c" target="_blank" rel="noreferrer">
          <FaXTwitter className='twit' />
          </a>
          <a href="https://instagram.com/local9957" target="_blank" rel="noreferrer">
          <RiInstagramFill className='insta' />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
