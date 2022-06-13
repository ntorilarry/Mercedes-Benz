import React from "react";
import "../styles/contact.css";
import Amg from "../assets/amg.png"

function Contact() {
  return (
    <div>
      <section class="text-gray-600 body-font bg-[#F5F5F5] cont ">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <img src={Amg} alt=""/>
            <h1 class="title-font font-medium text-5xl text-gray-900 contact-heading">
              Get yours today!
            </h1>
            <p class="leading-relaxed mt-4 contact-subtext mb-4">
              The Mercedes-AMG GT is a racing icon that is second to none.
            </p>

            <button
              type="submit"
              className="inline-flex items-center px-4 py-4 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600"
            >
              PRE 0RDER NOW
            </button>
          </div>
          <div class="lg:w-1/4 md:w-1/2 bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-white text-sm font-bold title-font mb-5 cont-head">
              CALL US FOR QUESTIONS
            </h2>
            <span class="inline-block h-px w-20 rounded bg-white mb-4"></span>
            <p class="relative mb-4">
              <p class="w-full bg-red-600 rounded font-bold text-sm outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                +30 123-456-7890
              </p>
            </p>
            <div class="relative mb-4">
              <h2 class="text-white text-sm font-medium title-font mb-5 cont-head">
                EMAIL US FOR INQUIRIES
              </h2>
              <span class="inline-block h-px w-20 rounded bg-white mb-4"></span>
              <p class="relative mb-4">
                <p class="w-full bg-red-600 rounded font-bold text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  email@mail.com
                </p>
              </p>
            </div>

            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
