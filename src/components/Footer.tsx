

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0f1a] text-white py-12 px-6">
      <div className="container mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div className="max-w-sm">
            <img src="/image.png" alt="ENG Learning Logo" className="h-16" />
            <p className="text-gray-400 mt-4 leading-relaxed max-w-[18rem]">
              One of the Best Online Platforms for Learning English for
              Students, Professionals & Job seekers.{" "}
            </p>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-4 uppercase tracking-wide">
              Help
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Branch List
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-4 uppercase tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Teacher Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-4 uppercase tracking-wide">
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-2">
              Address: Agargaon, Dhaka, Bangladesh{" "}
            </p>
            <p className="text-gray-400 mb-2">
              Helpline: 01605299524, 01778832924
            </p>
            <p className="text-gray-400 mb-2">WhatsApp: 01605299524</p>
            <p className="text-gray-400 mb-4">Email: engbcsenglish@gmail.com</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                <i className="fab fa-youtube text-lg"></i>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-100 text-sm">
          <p>
            <span className="text-yellow-500"> Copyright ©</span>{" "}
            englearning.online. All rights reserved. 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
