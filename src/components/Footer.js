import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-12">
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center mb-2">
            <FaPhone className="mr-2" /> (123) 456-7890
          </p>
          <p className="flex items-center mb-2">
            <FaEnvelope className="mr-2" /> ssic.nsd@gmail.com
          </p>
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2" /> 123 School St, City, State ZIP
          </p>
        </div>
        <div className="flex items-center">
          <h3 className="text-lg font-semibold mb-4 md:mb-0 md:mr-8">
            Follow Us
          </h3>
          <div className="flex space-x-4 mr-10">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out transform hover:scale-110"
            >
              <AiFillFacebook
                size={38}
                className="rounded-full bg-blue-600 p-2"
              />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out transform hover:scale-110"
            >
              <AiFillInstagram
                size={38}
                className="rounded-full bg-pink-600 p-2"
              />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out transform hover:scale-110"
            >
              <AiFillYoutube
                size={38}
                className="rounded-full bg-red-600 p-2"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p>&copy; 2024 SSIC. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
