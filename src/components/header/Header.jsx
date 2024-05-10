import React from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';



const Header = () => {
  return (
    <>
     <div style={{zIndex: '1'}} className={styles.container}>
      <div className={styles.navs}>
      <img src={process.env.PUBLIC_URL + '/images/Logo (6).png'} alt="Açıklama" />
      <ul>
        <li>
          <a href=""><Link to='/'>Home</Link></a>
        </li>
        <li>
          <a href=""><Link to='/aboutus'>About Us</Link></a>
        </li>
        <li>
        <a href=""><Link to='/destination'>Destination</Link></a>
        </li>
        <li>
          <a href=""><Link to='/tips'>Tips</Link></a>
        </li>
        <li>
        <a href=""><Link to='/contact'>Contact</Link></a>
        </li>
      </ul>
      <button className="hamburger-menu">
        <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
      </button>
      </div>
     </div>
    </>
  );
};

export default Header;
