import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Quiz from "@/components/Quiz";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Давайте создадим что-то amazing вместе
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Мы всегда открыты для общения и готовы помочь вам в реализации ваших идей. 
              Выберите удобный способ связи или оставьте заявку, и мы свяжемся с вами.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Phone Card */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border-2 border-primary/10 group cursor-pointer"
            >
              <div className="w-12 md:w-14 h-12 md:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 md:w-7 h-6 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Телефон</h3>
              <a href="tel:+79001234567" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group-hover:text-primary">
                +7 900 123-45-67
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Пн-Пт: 9:00 - 18:00
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border-2 border-primary/10 group cursor-pointer"
            >
              <div className="w-12 md:w-14 h-12 md:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 md:w-7 h-6 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:info@c571e.com" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group-hover:text-primary">
                info@c571e.com
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Ответим в течение 24 часов
              </p>
            </motion.div>

            {/* Address Card */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border-2 border-primary/10 group cursor-pointer"
            >
              <div className="w-12 md:w-14 h-12 md:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-6 md:w-7 h-6 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-gray-600 flex items-center gap-2 group-hover:text-primary">
                Москва, ул. Примерная, 123
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
              <p className="text-sm text-gray-500 mt-2">
                БЦ "Название", 5 этаж
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Discussion Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Обсудим ваш проект?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Расскажите нам о вашей идее, и мы поможем воплотить её в жизнь. 
              Заполните форму ниже, и наши специалисты свяжутся с вами в ближайшее время.
            </p>
          </motion.div>
          
          <Quiz />
        </div>
      </section>
    </div>
  );
};

export default Contact;