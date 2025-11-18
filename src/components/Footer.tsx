const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WebConnect360</h3>
            <p className="text-gray-400 text-sm">
              Leading healthcare technology solutions for modern medical practices.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-medical-teal transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-medical-teal transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/platforms" className="text-gray-400 hover:text-medical-teal transition-colors">
                  Platforms
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services" className="text-gray-400 hover:text-medical-teal transition-colors">
                  Integration Services
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-medical-teal transition-colors">
                  Training & Support
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-medical-teal transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>contact@webconnect360.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Medical Plaza, Suite 100</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} WebConnect360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
