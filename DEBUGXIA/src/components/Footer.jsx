import React from "react";
import { Link } from "react-router-dom";

import Logo from "./header/Logo";
import Icons from "./icon/Icons";

const Footer = () => {
  return (
    <footer
      className="
        relative
        z-20
        w-full
        mt-20
        px-6
        md:px-10
        pb-6
      "
    >

      <div
        className="
          min-h-[280px]
          rounded-2xl
          bg-white/5
          backdrop-blur-xl
          shadow-2xl
          border
          border-gray-800
          text-blue-300
          px-8
          md:px-12
          py-10
          flex
          flex-col
          lg:flex-row
          items-center
          lg:items-start
          justify-between
          gap-12
        "
      >

        {/* =====================================
            BRAND
        ====================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            min-w-[220px]
          "
        >

          <Logo />

          <div
            className="
              flex
              flex-col
              items-center
              gap-4
              mt-5
            "
          >

            <h1
              className="
                text-center
                font-medium
                text-lg
                text-white
                tracking-wide
              "
            >
              Your AI
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                  text-xl
                "
              >
                Code Security Assistant
              </span>
            </h1>

            <Icons />

          </div>

        </div>


        {/* =====================================
            FOOTER LINKS
        ====================================== */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            lg:justify-end
            gap-16
            md:gap-24
            text-white
          "
        >

          {/* CONTACT */}

          <div className="flex flex-col gap-5">

            <h2
              className="
                font-medium
                text-xl
                tracking-wide
                text-blue-300
              "
            >
              Contact
            </h2>

            <div
              className="
                flex
                flex-col
                gap-2
                font-light
                text-sm
                md:text-base
                text-gray-300
              "
            >

              <span>
                subhadeepbiswas205@gmail.com
              </span>

              <span>
                spedoriobusiness@gmail.com
              </span>

              <span>
                sohelighosh30@gmail.com
              </span>

              <span>
                sanchariray71@gmail.com
              </span>

              <span>
                sikdarritisha@gmail.com
              </span>

            </div>

          </div>


          {/* QUICK LINKS */}

          <div className="flex flex-col gap-5">

            <h2
              className="
                font-medium
                text-xl
                tracking-wide
                text-blue-300
              "
            >
              Quick Links
            </h2>

            <div
              className="
                flex
                flex-col
                gap-3
                font-light
                text-base
                text-gray-300
              "
            >

              <Link
                to="/About"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>

              <Link
                to="/Features"
                className="hover:text-white transition-colors duration-300"
              >
                Features
              </Link>

              <Link
                to="/How_It_Works"
                className="hover:text-white transition-colors duration-300"
              >
                How It Works
              </Link>

              <Link
                to="/Get_Started"
                className="hover:text-white transition-colors duration-300"
              >
                Get Started
              </Link>

            </div>

          </div>


          {/* LEGAL */}

          <div className="flex flex-col gap-5">

            <h2
              className="
                font-medium
                text-xl
                tracking-wide
                text-blue-300
              "
            >
              Legal
            </h2>

            <div
              className="
                flex
                flex-col
                gap-3
                font-light
                text-base
                text-gray-300
              "
            >

              <Link
                to="/Terms_and_con"
                className="hover:text-white transition-colors duration-300"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/Privacy_Policy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* COPYRIGHT */}

      <div
        className="
          text-center
          text-xs
          text-gray-600
          mt-5
          font-nova
        "
      >
        © {new Date().getFullYear()} NOVA. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;