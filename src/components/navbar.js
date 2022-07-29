import React from "react";
import Logo from "../assets/logo.png";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between  border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img className="h-10 w-auto" src={Logo} alt="" />
            </a>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="https://www.mercedes-benz.com/en/classic/museum/mercedes-amg-gt-concept/?urlReference=d433188a7318434a9b2205aeaa615e56"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              PRE-0RDER
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
