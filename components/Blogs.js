import React from "react";

const Blogs = () => {
  return (
    <div className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <h3 className="text-2xl font-semibold">Our Recent Blogs</h3>
      <div className="flex justify-between items-center mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12">
          {[...Array(4)].map((item, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <img src="/assets/blog3.svg" alt="" />
              <div className="">
                <p className="text-[#6941C6] text-md font-normal opacity-80">
                  November 16, 2014
                </p>
                <h2 className=" text-xl font-semibold">
                  Three Pillars of User Delight
                </h2>
                <p className="text-base text-gray-500">
                  Agile methods aim to overcome usability barriers in
                  traditional development, but post new threats to user
                  experience quality.{" "}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[#C11574] font-medium bg-[#FDF2FA] px-3 py-1 rounded-full whitespace-nowrap text-sm">
                  Research
                </span>
                <span className="text-[#027A48] font-medium bg-[#ECFDF3] px-3 py-1 rounded-full whitespace-nowrap text-sm">
                  UI Technology
                </span>
                <span className="text-[#027A48] font-medium bg-[#ECFDF3] px-3 py-1 rounded-full whitespace-nowrap text-sm">
                  UI Programming
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
