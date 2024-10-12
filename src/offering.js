import React from 'react';
import './Portfolio.css'; // You can style this using CSS

const projects = [
    {
        "title": "Crafting Exceptional Restaurant Websites",
        "imageUrl": "o1.jpg", // Local or online image link
        "description": " I specialize in building stunning, feature-rich websites for restaurants that not only look amazing but also deliver a seamless experience for your customers. By leveraging cutting-edge technologies like React, Express.js, and MongoDB, I create responsive, fast, and user-friendly platforms that showcase your menu, allow for online reservations, and integrate with delivery services.Whether you're looking to increase online orders, promote special events, or streamline table bookings, I can build a custom solution that meets your unique needs. Let me help your restaurant thrive online with a visually appealing and highly functional website that attracts more customers and enhances your brand"
      }
,      
  {
    title: 'Developing Premium Websites for Hotels and Businesses',
    imageUrl: 'o2.jpg',
    "description": "I excel in creating high-quality, fully customized websites for hotels and businesses across all industries. Using advanced technologies like React, Express.js, MongoDB, and more, I develop fast, secure, and mobile-friendly websites tailored to your specific goals. From sleek booking systems for hotels to robust e-commerce platforms, I ensure that every feature is designed to maximize efficiency and enhance the user experience.No matter the type of business, I can help you establish a powerful online presence that drives traffic, boosts sales, and strengthens your brand. Let me bring your vision to life with a custom-built solution that sets you apart from the competition. Feel free to reach out if you want a professional website that elevates your business to the next level!",
  },
  {
    title: 'Building High-Quality E-commerce Websites',
    imageUrl: 'o3.jpg',
    "description": "I specialize in creating top-notch e-commerce websites using modern web technologies. With expertise in React, Express.js, MongoDB, and more, I can build fast, secure, and user-friendly platforms tailored to your business needs. From seamless product browsing to smooth checkout experiences, I ensure every detail is crafted to enhance user engagement and drive sales. Let me help you take your online business to the next level with a powerful, custom-built e-commerce solution."

  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Web Services</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
