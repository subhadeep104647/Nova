import React from "react";
import { Link } from "react-router-dom";

import Logo from "./header/Logo";
import Icons from "./icon/Icons";

const Footer = () => {
  return (
    <footer className="relative z-20 w-full mt-24 px-4 md:px-8 pb-6">

      {/* =========================================
          FOOTER CONTAINER
      ========================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl

          bg-[#080810]/80
          backdrop-blur-2xl

          border
          border-white/[0.08]

          shadow-[0_0_60px_rgba(99,102,241,0.08)]

          px-6
          md:px-10
          lg:px-14

          pt-12
          pb-8
        "
      >

        {/* =========================================
            BACKGROUND GLOW
        ========================================== */}

        <div
          className="
            absolute
            -top-32
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[250px]
            rounded-full
            bg-purple-600/10
            blur-[120px]
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[300px]
            h-[200px]
            rounded-full
            bg-blue-600/5
            blur-[100px]
            pointer-events-none
          "
        />


        {/* =========================================
            MAIN FOOTER CONTENT
        ========================================== */}

        <div
          className="
            relative
            z-10

            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4

            gap-12
            lg:gap-8
          "
        >

          {/* =====================================
              BRAND
          ====================================== */}

          <div className="lg:col-span-1">

            <div className="flex flex-col items-start">

              <Logo />

              <p
                className="
                  mt-5
                  max-w-[260px]
                  text-sm
                  leading-6
                  text-gray-400
                "
              >
                AI-powered code security that helps developers
                detect vulnerabilities, understand risks, and
                build safer software.
              </p>

              {/* Security badge */}

              <div
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2

                  px-3
                  py-1.5

                  rounded-full

                  bg-purple-500/10
                  border
                  border-purple-400/20

                  text-xs
                  text-purple-300
                "
              >
                <span
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-purple-400
                    shadow-[0_0_8px_rgba(168,85,247,0.8)]
                  "
                />

                AI Code Security
              </div>

              {/* Social Icons */}

              <div className="mt-6">
                <Icons />
              </div>

            </div>

          </div>


          {/* =====================================
              PRODUCT
          ====================================== */}

          <div>

            <h2
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Product
            </h2>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
                text-sm
                text-gray-400
              "
            >

              <Link
                to="/Features"
                className="
                  w-fit
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                Features
              </Link>

              <Link
                to="/How_It_Works"
                className="
                  w-fit
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                How It Works
              </Link>

              <Link
                to="/Get_Started"
                className="
                  w-fit
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                Get Started
              </Link>

              <Link
                to="/SingIn"
                className="
                  w-fit
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                Sign In
              </Link>

            </div>

          </div>


          {/* =====================================
              SECURITY PIPELINE
          ====================================== */}

          <div>

            <h2
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Security
            </h2>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
                text-sm
                text-gray-400
              "
            >

              <span className="hover:text-gray-200 transition-colors">
                Vulnerability Detection
              </span>

              <span className="hover:text-gray-200 transition-colors">
                RAG Context Retrieval
              </span>

              <span className="hover:text-gray-200 transition-colors">
                Explainable AI
              </span>

              <span className="hover:text-gray-200 transition-colors">
                Remediation Guidance
              </span>

            </div>

          </div>


          {/* =====================================
              COMPANY + LEGAL
          ====================================== */}

          <div>

            <h2
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Company
            </h2>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
                text-sm
                text-gray-400
              "
            >

              <Link
                to="/About"
                className="
                  w-fit
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                About NOVA
              </Link>

              <Link
                to="/Terms_and_con"
                className="
                  w-fit
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                Terms & Conditions
              </Link>

              <Link
                to="/Privacy_Policy"
                className="
                  w-fit
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                Privacy Policy
              </Link>

            </div>

          </div>

        </div>


        {/* =========================================
            DIVIDER
        ========================================== */}

        <div
          className="
            relative
            z-10
            my-10
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />


        {/* =========================================
            BOTTOM BAR
        ========================================== */}

        <div
          className="
            relative
            z-10

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4

            text-xs
            text-gray-500
          "
        >

          <p>
            © {new Date().getFullYear()} NOVA. All rights reserved.
          </p>

          <p className="text-gray-600">
            Detect. Explain. Understand. Secure.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;