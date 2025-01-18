import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Quiz from "@/components/Quiz";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Contact Cards */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-3xl shadow-lg border-2 border-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <a href="tel:+79001234567" className="text-gray-600 hover:text-primary transition-colors">
                +7 900 123-45-67
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-3xl shadow-lg border-2 border-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:info@c571e.com" className="text-gray-600 hover:text-primary transition-colors">
                info@c571e.com
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-3xl shadow-lg border-2 border-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-gray-600">
                Москва, ул. Примерная, 123
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Discussion Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4"
            >
              Обсудим ваш проект?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Расскажите нам о вашей идее, и мы поможем воплотить её в жизнь. Заполните форму ниже, и наши специалисты свяжутся с вами в ближайшее время.
            </motion.p>
          </div>
          
          <Quiz />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;