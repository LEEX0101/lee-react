import React from 'react';
//import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-500 text-white py-12">
      <div className="container mx-auto px-6">
        {/*<div className="flex justify-center items-center">
          <a href="https://linkedin.com" className="hover:text-gray-300">
            <Linkedin size={24} />
          </a>
        </div>*/}
        
        <div className="mt-8 pt-8 text-center text-gray-900">
          <p>&copy; {new Date().getFullYear()} LeeDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
