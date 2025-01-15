import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="mt-4 space-y-2">
              <Link to="/about" className="block text-gray-600 hover:text-green-600">About Us</Link>
              <Link to="#" className="block text-gray-600 hover:text-green-600">Careers</Link>
              <Link to="#" className="block text-gray-600 hover:text-green-600">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">For Farmers</h3>
            <div className="mt-4 space-y-2">
              <Link to="#" className="block text-gray-600 hover:text-green-600">Download App</Link>
              <Link to="#" className="block text-gray-600 hover:text-green-600">Services</Link>
              <Link to="#" className="block text-gray-600 hover:text-green-600">Testimonials</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">&copy; 2024 C.H.I.R.A.G Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
