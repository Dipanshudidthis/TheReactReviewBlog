import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link as SLink } from 'react-scroll';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <SLink to='home' className='navbar-logo' onClick={closeMobileMenu} smooth={true}
                duration={1000}>
            S-REVIEWS
            <i class="fab fa-slack"></i>
          </SLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <SLink to='home' className='nav-links' onClick={closeMobileMenu} smooth={true}
                duration={1000}>
                Home
              </SLink>
            </li>
            <li className='nav-item'>
              <Link
                to='/read'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Read
              </Link>
            </li>
            <li className='nav-item'>
              <SLink
                to='about'
                className='nav-links'
                smooth={true}
                duration={1000}
                onClick={closeMobileMenu}
              >
                About Us
              </SLink>
            </li>

            <li>
              <SLink
                to='writing'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
                smooth={true}
                duration={1000}
              >
                New Review
              </SLink>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>NEW REVIEW</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;