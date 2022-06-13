import React from "react";
import "../styles/masterpiece.css";
import Master from "../assets/master.png";

function Masterpiece() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-20 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap items-center">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded "
              src={Master}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-red-600 tracking-widest font-bold mb-4 ">
                Masterpiece.
              </h2>
              <span class="inline-block h-1 w-20 rounded bg-red-600 mb-4"></span>
              <h1 class="text-gray-900 text-5xl title-font font-medium mb-10 masterpiece-heading">
                Powertrain.
              </h1>
              <p class="leading-relaxed text-sm masterpiece-subtext">
                An aggregate of racing-level performance - the V8 twin-turbo
                with twin turbochargers inside is designed for maximum
                performance and dynamic engine mounts adapt to any driving
                situation. In addition, the dry sump lubrication deepens the low
                installation position even further. Thrilling: explosive
                responsiveness with high torque.
              </p>
              <ul className="">
                <li>
                  {" "}
                  <span class="inline-block h-1 w-10 rounded bg-red-600 mr-5 "></span>
                  Fuel consumption combined:{" "}
                  <span className="text-red-600 font-bold text-lg">
                    12.4 l/100 km{" "}
                  </span>
                </li>
                <li>
                  <span class="inline-block h-1 w-10 rounded bg-red-600 mr-5"></span>{" "}
                  CO2 emissions combined:{" "}
                  <span className="text-red-600 font-bold text-lg">
                    284 g/km
                  </span>
                </li>
                <li>
                  {" "}
                  <span class="inline-block h-1 w-10 rounded bg-red-600 mr-5"></span>
                  <span className="text-red-600 font-bold text-lg">
                    Emission Statement
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Masterpiece;
