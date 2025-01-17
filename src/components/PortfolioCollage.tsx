import { motion } from "framer-motion";

interface PortfolioCollageProps {
  images: string[];
}

const PortfolioCollage = ({ images }: PortfolioCollageProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-12">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`relative overflow-hidden rounded-lg ${
            index === 0 ? 'col-span-2 row-span-2' : ''
          } ${index === images.length - 1 ? 'col-span-2' : ''}`}
        >
          <img
            src={image}
            alt={`Portfolio image ${index + 1}`}
            className="w-full h-full object-cover aspect-[4/3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioCollage;