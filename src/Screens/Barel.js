import React from "react";
import Navbar from "../components/Navbar";
import MyCarousel from "../components/MyCarousel";
import PhysicsHOD from "../assets/Einstein.jpg";
import ChemistryHOD from "../assets/Curie.png";
import MathsHOD from "../assets/Maths.png";
import BiologyHOD from "../assets/Biology.jpg";
import { FaFlask, FaCalculator, FaMicroscope, FaAtom } from "react-icons/fa"; // Import icons for Chemistry, Mathematics, and Biology
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TestimonialSlider from "../components/Testimonial";
import Principal from "../assets/Curie.png";
import SeniorPrincipalPhoto from "../assets/Principal.png";
import Footer from "../components/Footer.js";

import School from "../assets/School.jpg";
import Infrastructure from "../components/Infrastructure";
import { useNavigate } from "react-router-dom";
const Barel = () => {
  const navigate = useNavigate();
  const handlePhysicsHOD = () => {
    navigate("/physicshod");
  };
  return (
    <div className="h-screen">
      <Navbar />
      <div className="w-full overflow-hidden bg-gray-100">
        <MyCarousel />
      </div>
      <div className="bg-gray-100">
        <div className="flex flex-col items-center py-10">
          <h1 className="text-4xl font-bold uppercase mb-10">Meet Our HODs</h1>
          <div className="flex justify-center gap-10">
            {/* Physics HOD */}
            <motion.div
              className="text-center"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 1 }}
              onClick={handlePhysicsHOD}
            >
              <img
                src={PhysicsHOD}
                alt="Physics HOD"
                className="h-40 w-40 rounded-full mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold">Mr. John Doe</h3>
              <p className="text-gray-500">Head of Physics Department</p>
            </motion.div>
            {/* Chemistry HOD */}
            <motion.div
              className="text-center"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 1 }}
            >
              <img
                src={ChemistryHOD}
                alt="Chemistry HOD"
                className="h-40 w-40 rounded-full mx-auto mb-3 "
              />
              <h3 className="text-lg font-semibold">Ms. Jane Smith</h3>
              <p className="text-gray-500">Head of Chemistry Department</p>
            </motion.div>
            {/* Mathematics HOD */}
            <motion.div
              className="text-center"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 1 }}
            >
              <img
                src={MathsHOD}
                alt="Maths HOD"
                className="h-40 w-40 rounded-full mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold">Dr. Michael Johnson</h3>
              <p className="text-gray-500">Head of Maths Department</p>
            </motion.div>
            {/* Biology HOD */}
            <motion.div
              className="text-center"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 1 }}
            >
              <img
                src={BiologyHOD}
                alt="Biology HOD"
                className="h-40 w-40 rounded-full mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold">Dr. Charles Darwin</h3>
              <p className="text-gray-500">Head of Biology Department</p>
            </motion.div>
          </div>
        </div>
        <div className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-5">About Our Departments</h2>
            <div className="flex justify-center gap-10">
              {/* Physics Department */}
              <div className="w-1/3 flex flex-col items-center p-6 border border-blue-500 rounded-lg shadow-md">
                <FaAtom size={60} />
                <h3 className="text-xl font-semibold my-3 text-blue-500">
                  Physics Department
                </h3>
                <p className="text-gray-700">
                  Our Physics department is dedicated to providing comprehensive
                  education in the field of physics, covering topics from
                  classical mechanics to quantum physics.
                </p>
                <Link to="/physics-details" className="mt-6">
                  <motion.button
                    className="morebtn bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
              {/* Chemistry Department */}
              <div className="w-1/3 flex flex-col items-center p-6 border border-green-500 rounded-lg shadow-md">
                <FaFlask size={60} />
                <h3 className="text-xl font-semibold my-3 text-green-500">
                  Chemistry Department
                </h3>
                <p className="text-gray-700">
                  The Chemistry department focuses on chemical principles,
                  laboratory practices, and analytical techniques to prepare
                  students for real-world applications.
                </p>
                <Link to="/chemistry-details" className="mt-6">
                  <motion.button
                    className="morebtn bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
              {/* Mathematics Department */}
              <div className="w-1/3 flex flex-col items-center p-6 border border-red-500 rounded-lg shadow-md">
                <FaCalculator size={60} />
                <h3 className="text-xl font-semibold my-3 text-red-500">
                  Mathematics Department
                </h3>
                <p className="text-gray-700">
                  Our Mathematics department emphasizes problem-solving skills,
                  mathematical reasoning, and abstract thinking essential for
                  success in various fields.
                </p>
                <Link to="/maths-details" className="mt-6">
                  <motion.button
                    className="morebtn bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
              {/* Biology Department */}
              <div className="w-1/3 flex flex-col items-center p-6 border border-purple-500 rounded-lg shadow-md">
                <FaMicroscope size={60} />
                <h3 className="text-xl font-semibold my-3 text-purple-500">
                  Biology Department
                </h3>
                <p className="text-gray-700">
                  Our Biology department focuses on exploring life sciences,
                  including cellular biology, genetics, and ecology, equipping
                  students with a deep understanding of living organisms and
                  their environments.
                </p>
                <Link to="/biology-details" className="mt-6">
                  <motion.button
                    className="morebtn bg-purple-500 text-white px-3 py-1 rounded-md hover:bg-purple-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-5">Student Testimonials</h2>
            <div className=" overflow-hidden pb-10">
              <TestimonialSlider />
            </div>
          </div>
        </div>
        <div>
          <Infrastructure />
        </div>
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold mb-10 text-center uppercase">
            Who's Who
          </h2>
          <div className="flex justify-center gap-40 items-center mt-32">
            {/* Senior Principal */}
            <motion.div
              className="text-center"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <img
                src={SeniorPrincipalPhoto}
                alt="Senior Principal"
                className="h-60 w-60 rounded-full mx-auto mb-3 shadow-lg"
              />
              <h3 className="text-lg font-semibold">Senior Principal</h3>
              <p className="text-gray-500">Name and Position</p>
            </motion.div>
            {/* Principal */}
            <motion.div
              className="text-center"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <img
                src={Principal}
                alt="Principal"
                className="h-60 w-60 rounded-full mx-auto mb-3 shadow-lg"
              />
              <h3 className="text-lg font-semibold">Principal</h3>
              <p className="text-gray-500">Name and Position</p>
            </motion.div>
          </div>
          {/* Buttons to navigate to teacher pages */}
          <div className="flex justify-center mt-12 space-x-4">
            <Link to="/preprimary-barel">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Pre Primary Teachers
              </motion.button>
            </Link>
            <Link to="/primary-barel">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Primary Teachers
              </motion.button>
            </Link>
            <Link to="/junior-barel">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
              >
                Junior Teachers
              </motion.button>
            </Link>
            <Link to="/senior-barel">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Senior Teachers
              </motion.button>
            </Link>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Barel;
