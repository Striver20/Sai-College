import React from "react";
import { Link } from "react-router-dom";

const Achievements = () => {
  return (
    <div className="py-16 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 uppercase">
          Achievements
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Engineering & Medical Card */}
          <Link
            to="/engineering-medical"
            className="achievement-card bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg p-6 flex flex-col justify-center items-center transform hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold mb-4">
              Selections in Engineering & Medical
            </h2>
            <p className="text-lg">JEE NEET Result 2024</p>
          </Link>
          {/* Civil Services Card */}
          <Link
            to="/civil-services"
            className="achievement-card bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-6 flex flex-col justify-center items-center transform hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold mb-4">Civil Services</h2>
            <p className="text-lg">Civil Services Selections</p>
          </Link>
          {/* Student Awards Card */}
          <Link
            to="/student-awards"
            className="achievement-card bg-green-500 hover:bg-green-600 text-white rounded-lg p-6 flex flex-col justify-center items-center transform hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold mb-4">Student Awards</h2>
            <p className="text-lg">Student Awards and Recognitions</p>
          </Link>
          {/* Other Recognition Card */}
          <Link
            to="/other-recognition"
            className="achievement-card bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-6 flex flex-col justify-center items-center transform hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold mb-4">Other Recognition</h2>
            <p className="text-lg">Other Recognitions and Achievements</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
