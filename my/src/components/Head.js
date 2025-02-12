import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
  const navStyle = {
    marginBottom: '20px',
  };

  return (
    <nav style={navStyle}>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/login">LogIn</Link></li>
        <li><Link to="/toolbox">ToolBox</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
};
const navStyle = {
  marginBottom: '20px',
};

export default Head;
