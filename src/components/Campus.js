import React from "react";
import "../Styles/CourseInfo.css";
import study from "../assets/study.png";
import { useNavigate } from "react-router-dom";

const Campus = () => {
  const naviagate = useNavigate();
  const handleBarel = () => {
    naviagate("/barel");
  };
  const handleLkp = () => {
    naviagate("/lakhperabagh");
  };
  return (
    <div className="py-20 flex flex-col px-32 ">
      <div className="self-center">
        <h1 className="text-5xl font-semibold mb-16 uppercase">Campuses</h1>
      </div>
      <div className="flex flex-row justify-around ">
        <div className="flex flex-row w-1/2">
          <div className="mr-4 h-40 w-40 overflow-hidden">
            <img src={study} className="object-cover"></img>
          </div>
          <div>
            <h1 className="text-2xl font-medium">Barel Branch</h1>
            <p>
              This branch was established in 2020. It provides education from
              Montessori to XII(UP Board). Its main focus is on Competitive
              Exams. It has expert faculties from all over India.
            </p>
            <div className="flex flex-row justify-end">
              <button
                className="morebtn self-end bg-blue-400 p-1 rounded-lg text-white border-b-4 border-b-blue-600 px-2 mt-6"
                onClick={handleBarel}
              >
                more...
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-1/2">
          <div className="mr-4 h-20 w-20 overflow-hidden">
            <img src={study} className="object-cover"></img>
          </div>
          <div className="">
            <h1 className="text-2xl font-medium">Lakhperabagh Branch</h1>
            <p>
              This branch was established in 2004. It provides education from
              Montessori to XII(UP Board).
            </p>
            <div className="flex flex-row justify-end bt-8">
              <button
                className="morebtn self-end bg-blue-400 p-1 rounded-lg text-white border-b-4 border-b-blue-600 px-2"
                onClick={handleLkp}
              >
                more...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campus;
