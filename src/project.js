import React from 'react';
import './Portfolio.css'; // You can style this using CSS

const projects = [
    {
        "title": "PaySwift Fintech Application",
        "imageUrl": "payswift.jpg", // Local or online image link
        "description": "🚀 I'm excited to present a full-stack fintech application that integrates PayPal and Stripe to handle multi-currency transactions seamlessly. Here’s what the app offers:\n\n💸 Add funds via PayPal\n🌐 Send money in any currency with automatic conversion\n🔗 Collaborators can generate and share external payment links\n💼 Admin fee of 2% applied to each transaction\n\nThis project was built from scratch, using React.js for the frontend, Express.js for the backend, and MongoDB for the database."
      }
,      
  {
    title: 'Pitiklini Fintech Application',
    imageUrl: 'pitiklini.png',
    "description": "🚀 I'm excited to present a full-stack fintech application that integrates PayPal and Stripe to handle multi-currency transactions seamlessly. Here’s what the app offers:\n\n💸 Add funds via PayPal\n🌐 Send money in any currency with automatic conversion\n🔗 Collaborators can generate and share external payment links\n💼 Admin fee of 2% applied to each transaction\n\nThis project was built from scratch, using React.js for the frontend, Express.js for the backend, and MongoDB for the database.",
  },
  {
    title: 'PaySwift Fintech Application',
    imageUrl: 'pay.png',
    "description": "🚀 I'm excited to present a full-stack fintech application that integrates PayPal and Stripe to handle multi-currency transactions seamlessly. Here’s what the app offers:\n\n💸 Add funds via PayPal\n🌐 Send money in any currency with automatic conversion\n🔗 Collaborators can generate and share external payment links\n💼 Admin fee of 2% applied to each transaction\n\nThis project was built from scratch, using React.js for the frontend, Express.js for the backend, and MongoDB for the database.",
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Recent Projects</h2>
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
