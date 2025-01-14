import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full px-[10%] py-5 bg-transparent flex justify-between items-center z-50">
      <Link to="/" className="text-2xl text-primary font-semibold relative">
        C571E
      </Link>
      
      <nav className="flex gap-8">
        <Link to="/" className="text-lg text-black font-medium hover:text-primary transition-colors">
          Home
        </Link>
        <Link to="/services" className="text-lg text-black font-medium hover:text-primary transition-colors">
          Services
        </Link>
        <Link to="/about" className="text-lg text-black font-medium hover:text-primary transition-colors">
          About
        </Link>
        <Link to="/contact" className="text-lg text-black font-medium hover:text-primary transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;