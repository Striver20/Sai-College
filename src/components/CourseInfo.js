import React from "react";
import "../Styles/CourseInfo.css";
import {
  FaAward,
  FaBuilding,
  FaGraduationCap,
  FaQuestionCircle,
} from "react-icons/fa";

const CourseInfo = () => {
  return (
    <div className="w-full px-32">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between info-content">
          <div className=" flex flex-row w-full">
            <div className="overflow-hidden w-2/3 h-2/3 my-2 mx-6 rounded-full">
              <img
                src={require("../assets/Pre-Primary.jpg")}
                className="roundImage"
              />
            </div>
            <div className="flex flex-col">
              <div>
                <h4 className="font-semibold text-2xl">Pre-Primary</h4>
                <p>
                  The Pre-primary years in SSIC inculcate in children the
                  qualities of curiosity, exploration and discovery in a
                  fun-filled, safe and happy learning environment. The emphasis
                  is on developing in students love of learning, social skills,
                  moral values, and self-confidence. Teachers ensure this by
                  letting the students explore, know, understand and form their
                  own ideas.
                </p>
              </div>
              <div className="flex flex-row justify-end my-2">
                <button className="morebtn self-end bg-blue-400 p-1 rounded-lg text-white border-b-4 border-b-blue-600 px-2">
                  more...
                </button>
              </div>
            </div>
          </div>
          <div className=" flex flex-row w-full">
            <div className="overflow-hidden w-2/3 h-2/3 my-2 mx-6 rounded-full">
              <img
                src={require("../assets/Primary-Image.jpg")}
                className="roundImage"
              ></img>
            </div>
            <div className="flex flex-col">
              <div>
                <h4 className="font-semibold text-2xl">Primary</h4>
                <p>
                  SSIC aims to provide a joyful learning environment that
                  empowers primary aged children and develops their
                  self-confidence and competency in the core subjects. CMS seeks
                  to create a stimulating learning environment that both
                  supports and challenges the individual child. As they grow,
                  children develop the qualities of hard work, good manners and
                  self-discipline. Most importantly, they come out as self
                  assured and confident.
                </p>
              </div>
              <div className="flex flex-row justify-end my-2">
                <button className="morebtn self-end bg-blue-400 p-1 rounded-lg text-white border-b-4 border-b-blue-600 px-2">
                  more...
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className=" flex flex-row w-full">
            <div className="overflow-hidden w-2/3 h-2/3 my-2 mx-6 rounded-full">
              <img
                src={require("../assets/Junior.jpg")}
                className="roundImage"
              ></img>
            </div>
            <div className="flex flex-col">
              <div>
                <h4 className="font-semibold text-2xl">Juniors</h4>
                <p>
                  Students of the 11-13 age group are emerging as junior youth
                  and curious young adolescents. They need plenty of academic
                  stimulation and intellectually challenging material. The
                  foundations of solid learning laid here set the stage for
                  academic success in the senior years.
                </p>
              </div>
              <div className="flex flex-row justify-end my-2">
                <button className="morebtn self-end bg-blue-400 p-1 rounded-lg text-white border-b-4 border-b-blue-600 px-2">
                  more...
                </button>
              </div>
            </div>
          </div>
          <div className=" flex flex-row w-full">
            <div className="overflow-hidden w-2/3 h-2/3 my-2 mx-6 rounded-full">
              <img
                src={require("../assets/Senior.jpg")}
                className="roundImage"
              ></img>
            </div>
            <div className="flex flex-col">
              <div>
                <h4 className="font-semibold text-2xl">Seniors</h4>
                <p>
                  SSIC sets extremely high standards of academic scholarship.
                  There is an emphasis on learning by doing, especially in
                  science and computing. Students are provided with strategies
                  and the keys to success in Board Examinations that help them
                  to plan better and study smarter, not just harder. A strong
                  remedial teaching program helps weaker students to become
                  secure in their knowledge.
                </p>
              </div>
              <div className="flex flex-row justify-end my-2">
                <button className="morebtn self-end bg-blue-400 p-1 rounded-lg text-white border-b-4 border-b-blue-600 px-2">
                  more...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row max-md:flex-col justify-around mb-24 mt-10">
        <div className="px-4">
          <div className="w-fit py-4 bg-lime-400 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer max-md:mb-5">
            <div className="up bg-black py-2 px-8 text-white rounded-t-lg flex items-center">
              <FaAward className="mr-2" />
              <p>Awards & Recognitions</p>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="w-fit py-4 bg-lime-400 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer max-md:mb-5">
            <div className="up bg-black py-2 px-8 text-white rounded-t-lg flex items-center">
              <FaBuilding className="mr-2" />
              <p>Infrastructure & Facilities</p>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="w-fit py-4 bg-lime-400 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer max-md:mb-5">
            <div className="up bg-black py-2 px-8 text-white rounded-t-lg flex items-center">
              <FaGraduationCap className="mr-2" />
              <p>Alumni</p>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="w-fit py-4 bg-lime-400 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer max-md:mb-5">
            <div className="up bg-black py-2 px-8 text-white rounded-t-lg flex items-center">
              <FaQuestionCircle className="mr-2" />
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
