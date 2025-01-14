import { useEffect } from "react";

const Hero = () => {
  return (
    <section className="h-[90vh] flex justify-center items-center px-[10%] relative">
      <div className="text-center max-w-[600px] w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-5 opacity-0 animate-fade-in-up relative">
          <span>Web</span> Solutions for <span>Your</span> Business
        </h1>
        
        <h3 className="text-3xl font-bold text-black mb-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.3s" }}>
          Innovate / Create / Inspire
        </h3>
        
        <div className="flex justify-center gap-5 mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "2s" }}>
          <a
            href="#services"
            className="inline-flex justify-center items-center w-40 h-12 bg-background border-2 border-background rounded-lg text-lg text-black font-semibold relative overflow-hidden group hover:text-white transition-colors"
          >
            <span className="relative z-10">Our Services</span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 flex gap-6">
        <a
          href="#"
          className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center text-primary hover:text-secondary hover:border-secondary transition-colors"
        >
          <i className="bx bxl-vk text-xl"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center text-primary hover:text-secondary hover:border-secondary transition-colors"
        >
          <i className="bx bxl-telegram text-xl"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center text-primary hover:text-secondary hover:border-secondary transition-colors"
        >
          <i className="bx bxl-linkedin text-xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;