const Hero = () => {
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center px-[10%] relative">
      <div className="text-center max-w-[800px] w-full relative">
        <div className="absolute -z-10 text-[40rem] font-bold text-[#ca571e]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          #
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-5 opacity-0 animate-fade-in-up">
          Web Solutions for <br /> Your Business
        </h1>
        
        <h3 className="text-2xl md:text-3xl font-medium text-black mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.3s" }}>
          innovate / Create / Inspire
        </h3>
        
        <div className="flex justify-center gap-5 mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "2s" }}>
          <a
            href="#services"
            className="text-2xl font-medium text-black hover:text-primary transition-colors"
          >
            Our services
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 flex gap-6">
        <a
          href="#"
          className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center text-primary hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
        >
          <i className="bx bxl-vk text-xl"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center text-primary hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
        >
          <i className="bx bxl-telegram text-xl"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center text-primary hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
        >
          <i className="bx bxl-linkedin text-xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;