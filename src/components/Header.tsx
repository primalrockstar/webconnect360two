import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-medical-blue to-medical-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">WebConnect360</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/platforms"
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              Platforms
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
