import React from "react";
import "../styles/hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarr from "./navbar";
import Amg from "../assets/amg.png";

function Hero() {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <div className="w-full h-[100vh]  top-[90px] " id="bgg">
      <div className="w-full h-[100vh] bg-gradient-to-r from-[#2d2d2d]">
        <Navbarr />

        <div className="relative  overflow-hidden hero-benz">
          <main>
            <div className="pt-10  sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center justify-center">
                    <div className="lg:py-40">
                      <img
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="50"
                        data-aos-once="true"
                        className="Amg-logo"
                        src={Amg}
                        alt=""
                      />
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl "
                      >
                        <span className="block hero-heading">Unleash the</span>
                        <span className="pb-3 block bg-clip-text text-white sm:pb-5 hero-heading">
                          True Power
                        </span>
                      </h1>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-duration="3000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        className="text-sm text-gray-300 sm:text-sm lg:text-sm xl:text-sm hero-subtext"
                      >
                        The Mercedes-AMG GT combines the fascination of an
                        authentic sports car with segment-specific technology
                        leadership and high practicality.
                      </p>
                      <div className="mt-10 sm:mt-12 butt">
                        <div
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="1000"
                          data-aos-easing="ease-in-out"
                          data-aos-once="true"
                          className="sm:flex items-center butt"
                        >
                          <span class="inline-block h-1 w-20 rounded bg-red-600 "></span>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button className="block w-full  px-4  text-red-600 font-medium hover:scale-125">
                              <a href="https://www.mercedes-benz.com/en/classic/museum/mercedes-amg-gt-concept/?urlReference=d433188a7318434a9b2205aeaa615e56">
                                {" "}
                                PRE 0RDER NOW
                              </a>
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
