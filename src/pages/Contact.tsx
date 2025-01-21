import { Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Quiz from "@/components/Quiz";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9ff] to-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="container mx-auto max-w-6xl relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Давайте создадим что-то amazing вместе</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#1a1a1a]">
              Свяжитесь с нами
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Мы всегда открыты для общения и готовы помочь вам в реализации ваших идей. 
              Выберите удобный способ связи или оставьте заявку.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-12 md:py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Телефон",
                content: "+7 900 123-45-67",
                subtext: "Пн-Пт: 9:00 - 18:00",
                delay: 0.2
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                content: "info@c571e.com",
                subtext: "Ответим в течение 24 часов",
                delay: 0.3
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Адрес",
                content: "Москва, ул. Примерная, 123",
                subtext: "БЦ 'Название', 5 этаж",
                delay: 0.4
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl transform transition-transform group-hover:scale-105 duration-300" />
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-primary transition-colors flex items-center gap-2">
                    {item.content}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {item.subtext}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Discussion Section with Quiz */}
      <section className="py-12 md:py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />
        <div className="container mx-auto max-w-6xl relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
              Обсудим ваш проект?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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