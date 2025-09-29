import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* Left: Logo + Search */}
        <div className="flex items-center space-x-4">
          <img src="/image.png" alt="Eng Learning" className="h-14 w-auto" />
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder="স্কিল কোর্স, কিংবা স্কুল প্রোগ্রাম"
              className="px-4 py-2 rounded-full border border-gray-200 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Middle: Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-800">
          <a href="#" className="hover:text-blue-600 transition">Courses</a>
          <a href="#" className="hover:text-blue-600 transition">Exams</a>
          <a href="#" className="hover:text-blue-600 transition">Free Classes</a>
          <a href="#" className="hover:text-blue-600 transition">More</a>
        </div>

        {/* Right: Phone + Button */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="flex items-center text-green-600 font-medium">
            <Phone size={18} className="mr-1" />
            <span>01605299524</span>
          </div>
          <button className="bg-green-600 text-white px-5 py-2 rounded-md font-medium hover:bg-green-700">
            লগইন
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2 flex flex-col">
            <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
              Courses
            </a>
            <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
              Exams
            </a>
            <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
              Free Classes
            </a>
            <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
              More
            </a>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center text-green-600 font-medium">
                <Phone size={18} className="mr-1" />
                <span>01605299524</span>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700">
                লগইন
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
