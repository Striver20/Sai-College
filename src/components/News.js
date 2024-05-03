import React, { useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import NewsIcon from "../assets/NewsIcon.jpg";
import { BsShieldShaded } from "react-icons/bs";
const News = () => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = (section) => {
    setHover(section);
  };
  const handleMouseLeave = () => {
    setHover(null);
  };
  return (
    <div className="py-20 flex flex-col px-32 ">
      <div className="self-center">
        <h1 className="text-5xl font-semibold mb-16 uppercase">News</h1>
      </div>
      <div className="flex flex-row">
        <div className="w-full mx-10">
          <img src={NewsIcon}></img>
        </div>
        <div>
          <div
            className="flex flex-row mb-10"
            onMouseEnter={() => handleMouseEnter("Press")}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`mr-4 p-3 h-fit w-30 rounded-full border-gray-300 border-2 my-2 ${
                hover === "Press" ? "bg-blue-500" : ""
              }`}
            >
              <BsNewspaper
                color={hover === "Press" ? "#FFFFFF" : "#2596be"}
                size={30}
              />
            </div>
            <div className="w-4/5 flex flex-col">
              <h1 className="font-semibold text-xl">Press & Media</h1>
              <p>
                Vast coverage of SSIC events in the print and electronic media,
                highlighting the role that education must play as an instrument
                of profound social transformation.
              </p>
              <div className="self-start">
                <button
                  className="morebtn
                bg-blue-400
                p-1
                rounded-lg
                text-white
                border-b-4
                border-b-blue-600
                px-2
                mt-4 "
                >
                  read more...
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-row mb-10"
            onMouseEnter={() => handleMouseEnter("Bulletin")}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`mr-4 p-3 h-fit w-30 rounded-full border-gray-300 border-2 my-2 ${
                hover === "Bulletin" ? "bg-blue-500" : ""
              }`}
            >
              <BsShieldShaded
                color={hover === "Bulletin" ? "#FFFFFF" : "2596be"}
                size={30}
              />
            </div>
            <div className="w-4/5 flex flex-col">
              <h1 className="font-semibold text-xl">Bulletin</h1>
              <p>
                A window to the school and its 22 campuses. Important events
                news and individual achievements of students are published
                month-wise. Children also get a chance to express themselves in
                the Creative Section of the Bulletin.
              </p>
              <div className="self-start">
                <button
                  className="morebtn
                bg-blue-400
                p-1
                rounded-lg
                text-white
                border-b-4
                border-b-blue-600
                px-2
                mt-4 "
                >
                  read more...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
