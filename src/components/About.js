import React, { useState, useEffect } from 'react';
import './Pages.css';
import { useSpring, animated } from 'react-spring';
import profile from './images/dp (1).jpg';
import flag from './images/indian flag.png';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Retrieve the view count from local storage
    const storedViewCount = localStorage.getItem('viewCount');

    // If view count exists in local storage, use it; otherwise, initialize to 0
    setViewCount(storedViewCount ? parseInt(storedViewCount, 10) : 0);

    // Increment the view count and update local storage
    setViewCount((prevViewCount) => {
      const newViewCount = prevViewCount + 1;
      localStorage.setItem('viewCount', newViewCount.toString());
      return newViewCount;
    });
  }, []);

  const animationProps = useSpring({
    opacity: scrollY > 100 ? 0 : 1,
    transform: `translateY(${scrollY > 100 ? 0 : 1}px) scale(${scrollY > 100 ? 1 : 0.8})`,
    config: { duration: 300 },
  });

  return (

        <animated.div className="about-container" style={animationProps}>
          <div className="profile-card">
            <div className="photo-container">
              <animated.img src={profile} alt="Your Photo" className="profile-image" />
            </div>
            <div className="details-container">
              <h1>
                <TypeAnimation
                  sequence={['Narendra Kumar Sivangula', 1000]}
                  wrapper="span"
                  speed={0}
                  style={{ fontSize: '50px', display: 'inline-block', fontFamily: 'verdana' }}
                  repeat={Infinity}
                />
              </h1>
              <h3 style={{ color: 'green' }}>
                Programmer and Tech Enthusiast <img src={flag} alt="Indian Flag" width="60px" height="60px" className="flag" />
              </h3>
              <div className='button'>
                  <button style={{color:'black',boxShadow:'black',borderRadius:'10px'}}>
                    Profile Views: {viewCount}
                  </button></div>
                
                <div className="bio" style={{fontSize:'30px'}}>Make sure your React app is running. You can start it by running the command: npm start or yarn start in your project directory, depending on your package manager.
Open the App in a Browser:

Open your web browser and go to the URL where your React app is running (usually http://localhost:3000/).
Test Mouse Movement:

Move your mouse around the screen, especially over the content of your React app.
Observe if the content scales or zooms in/out based on your mouse movement.
Check for Console Errors:

Open your browser's developer tools (usually by right-clicking on the page and selecting "Inspect" or by pressing Ctrl+Shift+I or Cmd+Opt+I).
Go to the "Console" tab and check for any error messages. If there are errors related to the parallax zoom effect, they may provide clues about what's going wrong.
Adjustment and Debugging:

If the effect is not working as expected or if there are errors, you may need to review the code and make adjustments.
Consider logging values or using breakpoints in the handleMouseMove function to see if the mouse movement is being detected correctly.
Console Logging:</div>
              </div>
            </div>
        </animated.div>
      );
    };

export default About;
