import React from "react";
import Carbullet from "../assets/carbullet.png";
import "../styles/second.css";

function Second() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-18 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap items-center">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={Carbullet}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-red-600 tracking-widest font-bold mb-4 ">
                SECOND TO NONE
              </h2>
              <span class="inline-block h-1 w-20 rounded bg-red-600 mb-4"></span>
              <h1 class="text-gray-900 text-5xl title-font font-medium mb-10 second-heading">
                Mercedes <br />
                AMG GT Coupé
              </h1>
              <p class="leading-relaxed text-sm second-subtext">
                The Mercedes-AMG GT combines the fascination of an authentic
                sports car with segment-specific technology leadership and high
                practicality. With a top speed of 304 km/h and an acceleration
                from 0 to 100 km/h in 4.0 seconds, the Mercedes-AMG GT fits
                optimally into a sporty lifestyle. He expresses the essence of
                the performance brand AMG.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Second;