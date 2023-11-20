// components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';





const Header = () => (
  <header className="header myhead">

    <div className="first">
      <div className="mylogo">
      <img src="logo2.png" className='myicon' alt="Logo" />
      </div>
      <div className="myline"></div>
      <div className="sto">S T O R I E S</div>
    </div>
    <div className="blank"></div>
    <div className="blank"></div>
    <div className="second">
      <button className='btn' >Courses</button>

    </div>


  </header>
);

export default Header;


