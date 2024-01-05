// Home.js
import React from 'react';
import './Pages.css'



const Home = () => {
  return (
      <div className='home'>
        Home
        Run Your React App:

Make sure your React app is running. You can start it by running the command: npm start or yarn start in your project directory, depending on your package manager.
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
Console Logging:

You can add console.log statements in your code to log information to the console. For example, add console.log('Mouse moved:', xPercent, yPercent); inside the handleMouseMove function to log the mouse position.
    </div>
  );
}
 
export default Home;
