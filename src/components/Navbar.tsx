import { Link } from "react-router-dom";
import { FileText, Briefcase, MessageSquare } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full px-[10%] py-5 bg-transparent flex justify-between items-center z-50 backdrop-blur-sm">
      <Link to="/" className="text-2xl text-primary font-semibold relative flex items-center gap-2">
        <i className='bx bx-buildings text-3xl'></i>
        C571E
      </Link>
      
      <nav className="flex items-center gap-6">
        <Link
          to="/content-hub"
          className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
        >
          <FileText className="w-5 h-5" />
          Контент-хаб
        </Link>
        <Link
          to="/portfolio"
          className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
        >
          <Briefcase className="w-5 h-5" />
          Портфолио
        </Link>
        <Link
          to="/contact"
          className="flex items-center gap-2 text-lg font-medium text-white bg-primary px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          Оставить заявку
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;