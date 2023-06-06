import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/notifications">Notifications</Link>
    </nav>
  );
};

export default Navbar;
