import React from "react";
import "../Styles/Development.css";
import Card from "./Card";
import HappyChild from "../assets/HappyChild.jpg";
import Cambridge from "../assets/Cambridge.png";
import Singing from "../assets/Singing.jpg";
import ELearning from "../assets/ELearning.jpg";
import Sports from "../assets/Sports.jpg";
import Career from "../assets/Career.jpg";
const Development = () => {
  return (
    <div className="bg-gray-200 py-16 pb-44">
      <div className="flex justify-center mb-24">
        <h1 className="text-5xl font-semibold uppercase">Child Development</h1>
      </div>

      <div className="flex flex-row justify-around flex-wrap mx-auto max-w-3xl ">
        <div>
          <Card imageSrc={Cambridge} heading="Cambridge Exam Board" />
        </div>
        <div>
          <Card imageSrc={HappyChild} heading="Child Wellbeing" />
        </div>
        <div>
          <Card imageSrc={Singing} heading="Music & Dance Training" />
        </div>
        <div className="mt-10">
          <Card imageSrc={ELearning} heading="E-Learning" />
        </div>
        <div className="mt-10">
          <Card imageSrc={Sports} heading="Sports" />
        </div>
        <div className="mt-10">
          <Card imageSrc={Career} heading="Career Counselling" />
        </div>
      </div>
    </div>
  );
};

export default Development;
