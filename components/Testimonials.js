import React from "react";

const Testimonials = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col justify-center items-center bg-gray-50 gap-3">
        <img className="" src="/assets/logo.svg" alt="" />

        <p className="text-2xl font-medium text-center">
          Courses was fantastic! It is Master platform for those <br /> looking
          to start a new career, or need a refresher.
        </p>

        <img src="/assets/person.svg" alt="" />

        <div className="text-center">
          <p className="text-lg font-medium">Jacob Jonas</p>
          <p className="text-base text-gray-400 font-medium ">
            United International University
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
