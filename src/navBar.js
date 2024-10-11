import React, { useState } from 'react';
import './navBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='navFlex'>
        <div>
          <img className="profileImage1" src="/arbazDev.jpg" alt="Arbaz Developer" />
        </div>
        <div className={`navLinks ${isOpen ? 'show' : ''}`}>
          <div><a style={{textDecoration:'none',color:"black"}} href='#project' onClick={scrollToSection}>Home</a></div>
          <div><a style={{textDecoration:'none',color:"black"}} href='#projects' onClick={scrollToSection}>Projects</a></div>
          <div><a style={{textDecoration:'none',color:"black"}} href='#contact' onClick={scrollToSection}>Contact</a></div>
          <div><a style={{textDecoration:'none',color:"black"}} href='#testimonials' onClick={scrollToSection}>Testimonials</a></div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="content">
        {/* Your content goes here */}
      </div>
    </>
  );
}
