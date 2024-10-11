import React from 'react';
import NavBar from './navBar';
import ContactForm from './ContactForm';
import Project from './project';
import Text from './text';
import WhatsAppContact from './WhatsAppContact';

export default function App() {
  return (
    <>
      <NavBar />
      <div id='project'><Text/></div>
      <div id='projects'><Project/></div> {/* Ensure you have this component */}
      <div id='contact'><ContactForm /></div>
      <WhatsAppContact />
    </>
  );
}
