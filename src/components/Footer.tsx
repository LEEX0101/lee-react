<<<<<<< HEAD
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        
      </div>
      
      
      <p> &copy;  LeeDev demo website. Logo and image branding belong to Power Slap. </p>
    </div>
    
  );
}
=======
import React from 'react';
//import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/*<div className="flex justify-center items-center">
          <a href="https://linkedin.com" className="hover:text-gray-300">
            <Linkedin size={24} />
          </a>
        </div>*/}
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LeeDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
>>>>>>> refs/remotes/origin/main

export default Footer;