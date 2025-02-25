import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
import LogoCantoPagina from './images/LOGO_ROTSEN_03.png'


function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={LogoCantoPagina} alt='Leonardo Rotsen' width='100%' height='auto' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/trabalhos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Personal
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/curriculo'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Consultoria
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/curriculo' className='nav-links' onClick={closeMobileMenu}>
                Skill Development 🏀
              </Link>
            </li>


            <li>
              <Link
                to='/contato'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <hr className='nav-hr'></hr>
      </nav>
    </>
  );
}

export default Header;