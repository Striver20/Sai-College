import React from "react";
import PhysicsHOD from "../assets/Einstein.jpg";
import ChemistryHOD from "../assets/Curie.png";
import MathsHOD from "../assets/Maths.png";
import BiologyHOD from "../assets/Biology.jpg";
import Principal from "../assets/Curie.png";
import SeniorPrincipalPhoto from "../assets/Principal.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const PrimaryBarel = () => {
  const teachers = [
    {
      id: 1,
      name: "Mrs Name1",
      image: PhysicsHOD,
      degree: "B.Sc , B.Ed",
      post: "INCHARGE",
    },
    {
      id: 2,
      name: "Mrs Name2",
      image: ChemistryHOD,
      degree: "B.Sc , B.Ed",
      post: "INCHARGE",
    },
    {
      id: 3,
      name: "Mrs Name3",
      image: BiologyHOD,
      degree: "B.Sc , B.Ed",
      post: "INCHARGE",
    },
    {
      id: 4,
      name: "Mrs Name4",
      image: MathsHOD,
      degree: "B.Sc , B.Ed",
      post: "INCHARGE",
    },
    {
      id: 5,
      name: "Mrs Name5",
      image: Principal,
      degree: "B.Sc , B.Ed",
      post: "INCHARGE",
    },
    {
      id: 6,
      name: "Mrs Name6",
      image: Principal,
      degree: "B.Sc , B.Ed",
      post: "INCHARGE",
    },
    {
      id: 7,
      name: "Mrs Name7",
      image: Principal,
      degree: "B.Sc , B.Ed",
      post: "INCHARGE",
    },
  ];
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-32 mb-10">
        <h1 className="text-center  font-bold text-5xl uppercase">
          Primary Teachers
        </h1>
      </div>
      <div className="flex flex-row px-40  flex-wrap">
        {teachers.map((item) => (
          <div className="flex flex-col m-4">
            <img
              src={item.image}
              className="h-48 w-40 p-1 bg-white border-2 border-gray rounded"
            ></img>
            <h2 className="text-center font-semibold text-gray-500 text-lg ">
              {item.name}
            </h2>
            <p className="text-center">{item.post}</p>
            <p className="text-center">{item.degree}</p>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PrimaryBarel;
