import React from 'react';
import './Portfolio.css'; // You can style this using CSS

const projects = [
    {
        "title": "Boost Your Sales with Digital Marketing and Facebook Ads",
        "imageUrl": "m1.jpg", // Local or online image link
        "description": " I also offer expert digital marketing services to help your business grow. By running targeted Facebook ads and crafting effective digital marketing strategies, I can significantly improve your sales and reach more potential customers. With tailored campaigns designed to increase engagement, drive traffic, and convert visitors into buyers, I ensure your brand gets the attention it deserves.Let me handle your online advertising efforts, so you can focus on running your business while seeing measurable results. Whether you need a new website, enhanced online visibility, or both, I’ve got you covered! Reach out today to elevate your business through smart, data-driven marketing strategies."
      }
,      
  {
    title: 'Grow Your Business with Instagram and YouTube Ads',
    imageUrl: 'm2.jpg',
    "description": "I specialize in running powerful ad campaigns on Instagram and YouTube to help your business reach a wider audience and drive growth. By creating highly targeted ads on these platforms, I can increase brand visibility, engage potential customers, and boost your sales. Whether you want to showcase your products, promote services, or build brand awareness, Instagram and YouTube ads are key tools to take your business to the next level.Let me help you design and manage effective ad strategies that deliver real results, turning viewers into loyal customers. Reach out today to grow your business with impactful Instagram and YouTube advertising!",
  },
  {
    title: 'Search Engine Optamization',
    imageUrl: 'm3.jpg',
    "description": "I also offer a full range of digital marketing services, including SEO and Facebook ads. With advanced SEO techniques, I optimize your website to rank higher in search engines, driving more organic traffic to your business. Combined with targeted Facebook ad campaigns, I help you attract the right customers, improve sales, and grow your online presence.Whether you're looking for a stunning website, effective search engine optimization, or digital marketing strategies, I provide everything you need to boost your brand's visibility and success. Let’s work together to take your business to new heights with powerful, tailored solutions!",
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Marketing Services</h2>
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
