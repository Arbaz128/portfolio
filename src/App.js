import React from 'react';
import NavBar from './navBar';
import ContactForm from './ContactForm';
import Project from './project';
import Text from './text';
import WhatsAppContact from './WhatsAppContact';
import Offering from './offering'
import MarketingOffering from './digitalOffer'
export default function App() {
  return (
    <>
      <NavBar />
      <div id='project'><Text/></div>
      <div id='offering'><Offering/></div> 
      <div id='marketingOffering'><MarketingOffering/></div> 
      <div id='projects'><Project/></div> 
      <div id='contact'><ContactForm /></div>
      <WhatsAppContact />
    </>
  );
}
