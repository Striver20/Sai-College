import React from "react";
import { FiFileText, FiClipboard, FiBook, FiBarChart2 } from "react-icons/fi";
import Navbar from "../components/Navbar";
import MyCarousel from "../components/MyCarousel";
import "../Styles/Home.css";
import CourseInfo from "../components/CourseInfo";
import Philosophy from "../components/Philosophy";
import Development from "../components/Development";
import Campus from "../components/Campus";
import Achievements from "../components/Achievements";
import News from "../components/News";
import Footer from "../components/Footer";
import { delay, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleProspectus = () => {
    navigate("/prospectus");
  };
  const handleFee = () => {
    navigate("/fee");
  };
  return (
    <div className="h-screen">
      <div>
        <Navbar />
      </div>
      <div className="w-full overflow-hidden">
        <MyCarousel />
      </div>
      <div className="body mb-36 mt-16">
        <div className="px-32 pb-10">
          <motion.h2
            className="text-center animate-pulse uppercase font-serif font-bold text-6xl"
            initial={{ opacity: 0, y: "-5vw" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Sri Sai Inter College
          </motion.h2>
          <br />
          <p className="font-sans">
            Sri Sai Inter College (SSIC), a name synonymous with quality
            education, is the world’s largest school, with over 61,000 students
            and 4,500 staff across 22 campuses in the city of Barabanki. Founded
            in 2005 with 5 children on a borrowed capital of 300 Rupees by{" "}
            <a href="#" className="text-blue-500">
              Surendra Verma
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500">
              Navneet Tiwari
            </a>
            , SSIC is affiliated with the Council for Uttar Pradesh Board(UP)
            whose students from Class IX to Class XII achieve some of the best
            exam results in India. The couple started SSIC with a vision to
            inspire generations of children to become socially motivated and
            conscious citizens of India and the world. Their motto “Jai Jagat” -
            'Hail the World', in contrast to the popular post-Independence
            greeting, 'Jai Hind' ('Hail India') at the time of school's
            inception - has been the school's greeting till date. SSIC,
            therefore, places great emphasis on children's all-round
            development, moral character building, inculcating a global outlook
            and providing international exposure.
          </p>
        </div>
        <motion.div
          className="home-btns flex justify-center gap-4 my-8 px-32"
          initial={{ opacity: 0, x: "-6vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div
            className="medhome-btn w-fit py-4 bg-blue-400 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={handleProspectus}
          >
            <div className="up bg-black py-2 px-8 text-white rounded-t-lg flex items-center justify-center ">
              <FiFileText size={20} className="mr-2" />
              <p>Prospectus</p>
            </div>
          </div>
          <div
            className="medhome-btn w-fit py-4 bg-blue-400 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={handleFee}
          >
            <div className="up bg-black py-2 px-8 text-white rounded-t-lg flex items-center justify-center">
              <FiClipboard size={20} className="mr-2" />
              <p>Fee Structure</p>
            </div>
          </div>
          <div className="medhome-btn w-fit py-4 bg-blue-400 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out">
            <div className="up bg-black py-2 px-8 text-white rounded-t-lg flex items-center justify-center">
              <FiBook size={20} className="mr-2" />
              <p>Syllabus and Booklist</p>
            </div>
          </div>
          <div className="medhome-btn w-fit py-4 bg-blue-400 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out">
            <div className="up bg-black py-2 px-8 text-white rounded-t-lg flex items-center justify-center">
              <FiBarChart2 size={20} className="mr-2" />
              <p>SSIC Annual Reports</p>
            </div>
          </div>
        </motion.div>
        <div className="overflow-hidden w-full pt-10">
          <CourseInfo />
        </div>
        <div
          className="py-40 px-2 w-full"
          style={{ backgroundColor: "whitesmoke" }}
        >
          <Philosophy />
        </div>
        <div className="w-full">
          <Development />
        </div>
        <div className="w-full">
          <Campus />
        </div>
        <div>
          <Achievements />
        </div>
        <div>
          <News />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
