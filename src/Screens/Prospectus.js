import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Prospectus = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-between ">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col ">
        <div className="self-center mb-24">
          <h1 className="uppercase text-5xl font-bold">Prospectus</h1>
        </div>
        <div className="flex flex-row justify-evenly">
          <button className="morebtn self-end bg-blue-500 p-2 rounded-lg text-white border-b-4 border-b-blue-600 px-2">
            View Online
          </button>
          <button className="morebtn self-end bg-blue-500 p-2 rounded-lg text-white border-b-4 border-b-blue-600 px-2">
            Download Pdf
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Prospectus;
