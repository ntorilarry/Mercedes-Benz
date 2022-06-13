import React from "react";
import Steer from "../assets/steer.png";
import "../styles/sporty.css";

function Sporty() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-18 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap items-center">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-red-600 tracking-widest font-bold mb-4">
                SPORTY COCKPIT. EXCLUSIVE INTERIOR.
              </h2>
              <span class="inline-block h-1 w-20 rounded bg-red-600 mb-4"></span>
              <h1 class="text-gray-900 text-5xl title-font font-medium mb-4 sporty-heading">
                Interior.
              </h1>

              <p class="leading-relaxed mb-4 sporty-subtext">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.
              </p>

              <div class="flex bg-red-600 ">
                <button class="flex mr-auto text-black bg-white p-2 m-8 focus:outline-none rounded w-38 h-10 font-semibold">
                  PRE-ORDER NOW
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={Steer}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sporty;
