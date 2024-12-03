import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[45px] md:text-[55px] font-bold text-gray-900 mb-6">
            Web Developer & Designer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Let's build together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;