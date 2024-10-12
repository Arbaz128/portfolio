import React from 'react';
import './ServiceProfile.css';

const ServiceProfile = () => {
  const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="serviceProfile">
      {/* Profile Image Section */}
      <div className="serviceProfile__header">
        <img 
          src="arbaz.jpg" 
          alt="Arbaz" 
          className="serviceProfile__img" 
        />
        <h1 className="serviceProfile__name">Muhammad Arbaz Asif</h1>
        <h2 className="serviceProfile__role">Web Developer | Digital Marketing Specialist</h2>
      </div>

      {/* Services Section */}
      <div className="serviceProfile__services">
        <div className="serviceProfile__service">
          <h3>Web Development</h3>
          <p>
            I specialize in creating responsive, dynamic, and high-performance websites using cutting-edge technologies like React, Node.js, and Express.js. Whether it's a personal portfolio or a large-scale application, I bring your ideas to life.
          </p>
        </div>
        <div className="serviceProfile__service">
          <h3>Digital Marketing</h3>
          <p>
            My expertise extends to SEO, social media marketing, and data-driven campaigns. I help businesses grow their online presence and reach their target audience through customized marketing strategies.
          </p>
        </div>
      </div>

      {/* Contact Button */}
      <div className="serviceProfile__contact">
        <button className="serviceProfile__btn"><a style={{textDecoration:'none',color:"white"}} href='#contact' onClick={scrollToSection}>Let's Work Together</a></button>
      </div>
    </div>
  );
};

export default ServiceProfile;
