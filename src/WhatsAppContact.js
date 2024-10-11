import React from 'react';
import './WhatsAppContact.css'; // Ensure this CSS file is created

const WhatsAppContact = () => {
  const whatsappNumber = '+923004339095'; // Replace with your WhatsApp number (without the '+' sign)
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-button"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
      />
    </a>
  );
};

export default WhatsAppContact;
