// Import React and necessary components
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Fees = () => {
  const [selectedBranch, setSelectedBranch] = useState(""); // State to track selected branch

  // Sample fee structure data for Barel and Lapherbagh branches
  const feeStructures = {
    Barel: [
      {
        class: "Montessori to KG",
        installment1: "₹400",
        installment2: "₹400",
        installment3: "₹400",
        fullPayment: "₹1100",
      },
      {
        class: "Class 1",
        installment1: "₹500",
        installment2: "₹500",
        installment3: "₹500",
        fullPayment: "₹1400",
      },
      {
        class: "Class 2-5",
        installment1: "₹600",
        installment2: "₹600",
        installment3: "₹600",
        fullPayment: "₹1600",
      },
      {
        class: "Class 6-8",
        installment1: "₹700",
        installment2: "₹700",
        installment3: "₹700",
        fullPayment: "₹1900",
      },
      {
        class: "Class 9-10",
        installment1: "₹800",
        installment2: "₹800",
        installment3: "₹800",
        fullPayment: "₹2200",
      },
      {
        class: "Class 11-12",
        installment1: "₹900",
        installment2: "₹900",
        installment3: "₹900",
        fullPayment: "₹2500",
      },
      // Fee structures for Barel branch
    ],
    Lapherbagh: [
      {
        class: "Montessori to KG",
        installment1: "₹200",
        installment2: "₹200",
        installment3: "₹200",
        fullPayment: "₹500",
      },
      {
        class: "Class 1",
        installment1: "₹400",
        installment2: "₹400",
        installment3: "₹400",
        fullPayment: "₹1000",
      },
      {
        class: "Class 2-5",
        installment1: "₹500",
        installment2: "₹500",
        installment3: "₹500",
        fullPayment: "₹1200",
      },
      {
        class: "Class 6-8",
        installment1: "₹600",
        installment2: "₹600",
        installment3: "₹600",
        fullPayment: "₹1500",
      },
      {
        class: "Class 9-10",
        installment1: "₹700",
        installment2: "₹700",
        installment3: "₹700",
        fullPayment: "₹2000",
      },
      {
        class: "Class 11-12",
        installment1: "₹800",
        installment2: "₹800",
        installment3: "₹800",
        fullPayment: "₹2200",
      },
      // Fee structures for Lapherbagh branch
    ],
  };

  const handleBranchChange = (branch) => {
    setSelectedBranch(branch);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onBranchChange={handleBranchChange} />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center mt-32"
      >
        <h1 className="text-4xl font-bold mb-10">Fee Structure</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleBranchChange("Barel")}
          >
            Barel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleBranchChange("Lapherbagh")}
          >
            Lapherbagh
          </motion.button>
        </div>
        {selectedBranch && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto w-full"
          >
            <table className="min-w-max w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-base leading-normal">
                  <th className="py-3 px-6 text-left">Class</th>
                  <th className="py-3 px-6 text-left">Installment 1</th>
                  <th className="py-3 px-6 text-left">Installment 2</th>
                  <th className="py-3 px-6 text-left">Installment 3</th>
                  <th className="py-3 px-6 text-left">Full Payment</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-base">
                {feeStructures[selectedBranch].map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {item.class}
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {item.installment1}
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {item.installment2}
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {item.installment3}
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {item.fullPayment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Fees;
