// PhysicsHOD.js
import Curie from "../assets/Curie.png";
import React from "react";
import { motion } from "framer-motion";

const PhysicsHOD = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md p-8 max-w-2xl"
      >
        <div className="flex flex-col items-center mb-4">
          <img src={Curie} alt="HOD Photo" className="w-32 h-32 rounded-full" />
          <p className="text-gray-600 mt-2">Dr. Marie Curie</p>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">
            Head of Physics Department
          </h1>
          <div className="border-b-2 border-gray-200 mb-4"></div>
          <h2 className="text-lg font-bold mb-2">Achievements</h2>
          <ul className="text-gray-700 mb-4 text-left">
            <li>Published research papers on Quantum Mechanics.</li>
            <li>Recipient of the Nobel Prize in Physics.</li>
            <li>Recognized for contributions to Particle Physics.</li>
          </ul>
          <h2 className="text-lg font-bold mb-2">Teaching History</h2>
          <p className="text-gray-700 mb-4">
            Dr. Curie has a rich teaching history spanning over 15 years in the
            field of physics. She has taught various courses including Quantum
            Mechanics, Thermodynamics, and Electromagnetism. Her teaching style
            emphasizes practical applications and real-world examples, making
            complex concepts accessible to students.
          </p>
          <h2 className="text-lg font-bold mb-2">Qualifications</h2>
          <ul className="text-gray-700 mb-2 text-left">
            <li>Ph.D. in Physics from XYZ University.</li>
            <li>Master's Degree in Theoretical Physics.</li>
            <li>Bachelor's Degree in Applied Mathematics.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default PhysicsHOD;
