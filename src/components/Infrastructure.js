import { motion } from "framer-motion";
import Campus from "../assets/Campus.jpg";
import Classroom from "../assets/Classroom.jpg";
const Infrastructure = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <img
              src={Campus}
              alt="Cinematic Infrastructure"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Cinematic Infrastructure
            </h2>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Infrastructure;
