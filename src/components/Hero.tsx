const Hero = () => {
  return (
    <section className="h-[90vh] flex flex-col justify-between items-start px-[10%] relative py-20">
      {/* Semi-transparent hashtag background */}
      <div className="absolute inset-0 flex items-center justify-center text-[40rem] font-bold text-primary/10 select-none">
        #
      </div>
      
      {/* Top left text */}
      <div className="relative z-10 max-w-[600px]">
        <h2 className="text-4xl md:text-5xl font-bold text-primary opacity-0 animate-fade-in-up">
          Innovative Solutions
        </h2>
        <p className="mt-4 text-lg text-black/70 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Transform your ideas into reality
        </p>
      </div>

      {/* Center text */}
      <div className="relative z-10 self-center text-center max-w-[800px]">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          Web Solutions for <br /> Your Business
        </h1>
        <h3 className="text-2xl md:text-3xl font-medium text-black opacity-0 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          innovate / Create / Inspire
        </h3>
      </div>

      {/* Bottom left text and social links */}
      <div className="relative z-10 w-full flex justify-between items-end">
        <div className="max-w-[600px]">
          <h2 className="text-4xl md:text-5xl font-bold text-primary opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
            Digital Excellence
          </h2>
          <p className="mt-4 text-lg text-black/70 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.5s" }}>
            Elevate your digital presence
          </p>
        </div>

        <div className="flex gap-6">
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
      </div>
    </section>
  );
};

export default Hero;