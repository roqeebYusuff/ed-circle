import React from "react";

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="sm:text-7xl text-5xl capitalize font-semibold tracking-tight">
            up your{" "}
            <span className="text-purple-500 pl-2 capitalize">Skills</span>{" "}
            <br /> to{" "}
            <span className="text-purple-500 pl-2 capitalize">Advance</span>{" "}
            your <br />{" "}
            <span className="text-purple-500 pl-2 capitalize">Career</span> path
          </h1>
          <p className="text-lg text-gray-600 tracking-tight">
            Provides you with the latest online learning system and material
            that help your knowledge growing.
          </p>
          <div className="flex gap-4">
            <button className="btn bg-purple-500 border-none capitalize btn-lg">
              Get Started
            </button>
            <button className="btn bg-purple-100 text-purple-500 border-none capitalize btn-lg ">
              Get Free Trial
            </button>
          </div>
          <div className="flex gap-6 items-center pt-6">
            <div className="flex gap-2 items-center">
              <img src="/assets/public.svg" alt="" />
              <p>Public Speaking</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/assets/career.svg" alt="" />
              <p>Career Oriented</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/assets/think.svg" alt="" />
              <p>Creative Thinking</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img src="/assets/hero.png" alt="" />
        </div>
      </div>
      <div className="mt-4">
        <img src="/assets/company.svg" alt="" />
      </div>
    </section>
  );
};

export default Hero;
