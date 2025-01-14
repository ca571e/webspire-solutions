import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full px-[10%] py-5 bg-transparent flex justify-between items-center z-50">
      <Link to="/" className="text-2xl text-primary font-semibold relative flex items-center gap-2">
        <i className='bx bx-buildings text-3xl'></i>
        C571E
      </Link>
      
      <nav className="flex gap-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <Link
            key={num}
            to={`/page${num}`}
            className={`text-lg font-medium transition-colors ${
              num === 1 ? 'text-primary' : 'text-black hover:text-primary'
            }`}
          >
            {num}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;