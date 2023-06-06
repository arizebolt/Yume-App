import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/NavBar.module.css';


const Navbar = () => {
  return (
    <nav className={styles.navFlex}>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/profile">Profile</Link></div>
      <div><Link to="/explore">Explore</Link></div>
      <div><Link to="/notifications">Notifications</Link></div>
    </nav>
  );
};

export default Navbar;
