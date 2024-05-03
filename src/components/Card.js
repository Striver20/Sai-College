import React from "react";

const Card = ({ imageSrc, heading }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden  w-56 h-72 shadow-md hover:shadow-2xl transition duration-300 cursor-pointer">
      <img src={imageSrc} alt="Card" className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold">{heading}</h3>
      </div>
    </div>
  );
};

export default Card;
