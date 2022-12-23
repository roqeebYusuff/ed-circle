import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const MobileNav = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 mt-12">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {/* <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </Dialog.Title> */}
                <div className="">
                  <div className="justify-between items-center border border-[#d0d5dd] px-0.5 pl-2 py-0.5 rounded-md flex">
                    <CiSearch className="text-[#c3c5c9]" />
                    <input
                      className="focus:outline-none"
                      type="text"
                      placeholder="Want to learn?"
                    />
                    <button className="flex items-center px-3 py-1 font-medium text-purple-600 capitalize rounded-md bg-purple-50 hover:bg-purple-200">
                      Explore
                      <BsArrowDownShort />
                    </button>
                  </div>
                  <ul className="mt-8 space-y-4">
                    <li>
                      <Link href="/">
                        <span className="text-base font-medium">Program</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <span className="text-base font-medium">
                          Enterprise
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <span className="text-base font-medium">
                          Universities
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <span className="text-base font-medium capitalize bg-purple-500 border border-none cursor-pointer btn btn-sm">
                          Sign In
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MobileNav;
