import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#101828]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative py-10">
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-white">
          <div className="flex flex-col gap-4">
            <img src="/assets/logo_light.svg" alt="" />
            <p>
              Top learning experiences that create more talent in the world.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-xl font-semibold">Product</p>
            <p className="text-sm  font-medium">Overview</p>
            <p className="text-sm  font-medium">Features</p>
            <p className="text-sm  font-medium">Solution</p>
            <p className="text-sm  font-medium">Tutorials</p>
            <p className="text-sm  font-medium">Pricing</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-xl font-semibold">Company</p>
            <p className="text-sm  font-medium">About Us</p>
            <p className="text-sm  font-medium">Career</p>
            <p className="text-sm  font-medium">Press</p>

            <p className="text-sm  font-medium">News</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-xl font-semibold">Social</p>
            <p className="text-sm  font-medium">Facebook</p>
            <p className="text-sm  font-medium">Youtube</p>

            <p className="text-sm  font-medium">Twitter</p>
            <p className="text-sm  font-medium">Linkedin</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-xl font-semibold">Legal</p>
            <p className="text-sm  font-medium">Terms</p>
            <p className="text-sm  font-medium">Privacy</p>

            <p className="text-sm  font-medium">Cookies</p>
            <p className="text-sm  font-medium">Contact</p>
          </div>
        </div>
        <div className="flex justify-between items-center pt-20 pb-5">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Ed-Circle. All rights reserved.
          </p>
          <div className="flex gap-3">
            <BsFacebook className="text-gray-500 hover:text-primary" />
            <BsInstagram className="text-gray-500 hover:text-primary" />
            <BsTwitter className="text-gray-500 hover:text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
