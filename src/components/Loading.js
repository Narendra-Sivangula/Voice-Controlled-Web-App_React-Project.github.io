// Loading.js
import React from 'react';
import loading from './images/Loading.gif';

const Loading = () => {
  return (
    <div className="loading-container">
      <center><img src={loading} draggable={false} alt="Loading" /></center>
      {/* You can add a spinner or any other loading animation here */}
    </div>
  );
};

export default Loading;
