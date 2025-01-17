import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-2xl text-primary font-semibold flex items-center gap-2">
              <i className='bx bx-buildings text-3xl'></i>
              C571E
            </Link>
            <p className="text-gray-600">
              Создаем уникальные цифровые решения для вашего бизнеса
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Контакты</h3>
            <div className="space-y-2">
              <a href="tel:+79001234567" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                <Phone className="w-4 h-4" />
                +7 900 123-45-67
              </a>
              <a href="mailto:info@c571e.com" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                <Mail className="w-4 h-4" />
                info@c571e.com
              </a>
              <p className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                Москва, ул. Примерная, 123
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Навигация</h3>
            <div className="space-y-2">
              <Link to="/portfolio" className="block text-gray-600 hover:text-primary">
                Портфолио
              </Link>
              <Link to="/content-hub" className="block text-gray-600 hover:text-primary">
                Контент-хаб
              </Link>
              <Link to="/contact" className="block text-gray-600 hover:text-primary">
                Связаться с нами
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Социальные сети</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; 2024 C571E. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;