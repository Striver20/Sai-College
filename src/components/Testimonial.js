import React from "react";
import Slider from "react-slick";
import Chitrang from "../assets/Chitrang.png";
const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Chitrang Murdia",
      rank: "JEE Advance Rank 1",
      image: Chitrang,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Jane Smith",
      rank: "2nd Rank",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      rank: "3rd Rank",
      image: "../assets/Chitrang.png",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                {/* Assuming you have images for each topper */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-40 w-40 rounded-full mx-auto mb-3"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.rank}</p>
              </div>
            </div>
            <p className="mt-4">{testimonial.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
