import React from "react";
import "../styles/hero.css";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Navbarr from "./navbar";
import Amg from "../assets/amg.png";

function Hero() {
  return (
    <div className="w-full h-[100vh]  top-[90px] " id="bgg">
      <div className="w-full h-[100vh] bg-gradient-to-r from-[#2d2d2d]">
        <Navbarr />

        <div className="relative  overflow-hidden">
          <main>
            <div className="pt-10  sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-96">
                      <img className="Amg-logo" src={Amg} alt="" />
                      <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl ">
                        <span className="block hero-heading">Unleash the</span>
                        <span className="pb-3 block bg-clip-text text-white sm:pb-5 hero-heading">
                          True Power
                        </span>
                      </h1>
                      <p className="text-sm text-gray-300 sm:text-sm lg:text-sm xl:text-sm hero-subtext">
                        The Mercedes-AMG GT combines the fascination of an
                        authentic sports car with segment-specific technology
                        leadership and high practicality.
                      </p>
                      <div className="mt-10 sm:mt-12 butt">
                        <div className="sm:flex items-center butt">
                          <span class="inline-block h-1 w-20 rounded bg-red-600 "></span>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button className="block w-full  px-4  text-red-600 font-medium ">
                              <a href="/#contact"> PRE 0RDER NOW</a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default Hero;
