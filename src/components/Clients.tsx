import React from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const clientsData = [
  {
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2428&auto=format&fit=crop",
  },
  {
    name: "FinanceHub",
    logo: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2370&auto=format&fit=crop",
  },
  {
    name: "EduTech",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2370&auto=format&fit=crop",
  },
  {
    name: "HealthCare Plus",
    logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2370&auto=format&fit=crop",
  },
  {
    name: "RetailPro",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2370&auto=format&fit=crop",
  },
  {
    name: "MediaGroup",
    logo: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2370&auto=format&fit=crop",
  }
];

const Clients = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-secondary"
        >
          Наши клиенты
        </motion.h2>
        
        <Carousel
          opts={{
            align: "center",
            skipSnaps: true,
            dragFree: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="py-4">
            {clientsData.map((client, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full bg-white p-4"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                      <p className="text-secondary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {client.name}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </motion.section>
  );
};

export default Clients;