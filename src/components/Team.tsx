import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    image: "/placeholder.svg",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    image: "/placeholder.svg",
  },
  {
    name: "Mike Johnson",
    position: "Lead Developer",
    image: "/placeholder.svg",
  },
  {
    name: "Sarah Williams",
    position: "Designer",
    image: "/placeholder.svg",
  },
  {
    name: "Tom Brown",
    position: "Marketing",
    image: "/placeholder.svg",
  },
  {
    name: "Emma Davis",
    position: "Product Manager",
    image: "/placeholder.svg",
  },
  {
    name: "Chris Wilson",
    position: "Developer",
    image: "/placeholder.svg",
  },
  {
    name: "Lisa Anderson",
    position: "UX Designer",
    image: "/placeholder.svg",
  }
];

const Team = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-8 md:py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Наша команда
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4"
        >
          Профессионалы, которые делают ваши проекты особенными
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-background shadow-lg transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <motion.img 
                  src={member.image} 
                  alt={member.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                >
                  <h3 className="text-white font-semibold text-lg md:text-xl mb-1">{member.name}</h3>
                  <p className="text-white/90 text-sm md:text-base">{member.position}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;