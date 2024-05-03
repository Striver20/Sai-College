import React from "react";

const Philosophy = () => {
  return (
    <div className="px-32" style={{ backgroundColor: "whitesmoke" }}>
      <div className="flex flex-row justify-center uppercase font mb-10">
        <h1 className="text-5xl font-semibold">Philosophy</h1>
      </div>
      <div>
        <p>
          At CMS, we believe that education for the 21st Century must be both
          broader and bolder. A modern school needs to do much more than
          ensuring good marks on a sheet, which is the minimum responsibility of
          a school. A ‘good’ education must produce much more: a ‘good’ human
          being with a broad range of capabilities. A CMS education takes into
          account the three realities of a human being: material, human, and
          divine. In turn, CMS education is based on four building blocks,
          developing in children Universal Values, Global Understanding, a
          spirit of Service to the World , and an attitude of Excellence in All
          Things .
        </p>
      </div>
      <div className="flex flex-row justify-end">
        <button className="morebtn self-end bg-blue-400 p-1 rounded-lg text-white border-b-4 border-b-blue-600 px-2">
          more...
        </button>
      </div>
    </div>
  );
};

export default Philosophy;
