import { motion } from "framer-motion";

interface PortfolioCollageProps {
  images: string[];
}

const PortfolioCollage = ({ images }: PortfolioCollageProps) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
        >
          <img
            src={image}
            alt={`Portfolio image ${index + 1}`}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioCollage;
