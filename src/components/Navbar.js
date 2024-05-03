import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from React Router

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <div className="navbar-container bg-gray-100 py-4 fixed top-0 w-full z-50  bg-opacity-90">
      <div className="flex justify-between items-center mx-auto max-w-6xl px-4">
        <div className="logo">
          <img src={require("../assets/Logo.png")} alt="cllg-img" />
        </div>
        <div className="flex flex-row space-x-4">
          {[
            { name: "Home", path: "/" },
            { name: "About us", path: "/about" },
            { name: "Campuses", path: "/campuses" },
            { name: "School Founders", path: "/founders" },
            { name: "Events", path: "/events" },
            { name: "Admissions", path: "/admissions" },
            { name: "Careers", path: "/careers" },
            { name: "Contact us", path: "/contact" },
          ].map((page, index) => (
            <NavLink
              key={index}
              to={page.path}
              className={`px-3 py-2 rounded-lg text-slate-800 font-medium transition duration-300 ${
                activePage === page.name
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "hover:bg-blue-600 hover:text-white"
              }`}
              onClick={() => handlePageChange(page.name)}
            >
              {page.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
