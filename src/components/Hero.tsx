import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-[90vh] flex flex-col justify-between items-start px-[10%] relative py-20">
      {/* Semi-transparent hashtag background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center text-[40rem] font-bold text-primary/10 select-none"
      >
        #
      </motion.div>
      
      {/* Top left text */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-[600px]"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          Innovative Solutions
        </h2>
        <p className="mt-4 text-lg text-black/70">
          Transform your ideas into reality
        </p>
      </motion.div>

      {/* Center text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 self-center text-center max-w-[800px]"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-5">
          Web Solutions for <br /> Your Business
        </h1>
        <h3 className="text-2xl md:text-3xl font-medium text-black">
          innovate / Create / Inspire
        </h3>
      </motion.div>

      {/* Bottom left text and social links */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 w-full flex justify-between items-end"
      >
        <div className="max-w-[600px]">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Digital Excellence
          </h2>
          <p className="mt-4 text-lg text-black/70">
            Elevate your digital presence
          </p>
        </div>

        <div className="flex gap-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center text-primary hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
          >
            <i className="bx bxl-vk text-xl"></i>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center text-primary hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
          >
            <i className="bx bxl-telegram text-xl"></i>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center text-primary hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
          >
            <i className="bx bxl-linkedin text-xl"></i>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;