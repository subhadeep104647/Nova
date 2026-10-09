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

        {/* =====================================================
            BRAND
        ===================================================== */}

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
                  via-purple-500
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                  text-xl
                  font-semibold
                "
              >
                Code Security Assistant
              </span>
            </h1>

            <p
              className="
                text-center
                text-sm
                text-gray-500
                max-w-[220px]
              "
            >
              Detect vulnerabilities.
              Understand the risk.
              Secure your code.
            </p>

            <Icons />

          </div>

        </div>

        {/* =====================================================
            FOOTER LINKS
        ===================================================== */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            lg:justify-end
            gap-14
            md:gap-20
            text-white
          "
        >

          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="flex flex-col gap-5">

            <h2
              className="
                font-semibold
                text-lg
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
                text-sm
                text-gray-400
              "
            >

              <span className="hover:text-white transition">
                subhadeepbiswas205@gmail.com
              </span>

              <span className="hover:text-white transition">
                spedoriobusiness@gmail.com
              </span>

              <span className="hover:text-white transition">
                sohelighosh30@gmail.com
              </span>

              <span className="hover:text-white transition">
                sanchariray71@gmail.com
              </span>

              <span className="hover:text-white transition">
                sikdarritisha@gmail.com
              </span>

            </div>

          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="flex flex-col gap-5">

            <h2
              className="
                font-semibold
                text-lg
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
                text-sm
                text-gray-400
              "
            >

              <Link
                to="/"
                className="
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                "
              >
                Home
              </Link>

              <Link
                to="/Features"
                className="
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                "
              >
                Features
              </Link>

              <Link
                to="/How_It_Works"
                className="
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                "
              >
                How It Works
              </Link>

              <Link
                to="/About"
                className="
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                "
              >
                About NOVA
              </Link>

              <Link
                to="/Get_Started"
                className="
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                "
              >
                Get Started
              </Link>

            </div>

          </div>

          {/* =================================================
              SECURITY
          ================================================= */}

          <div className="flex flex-col gap-5">

            <h2
              className="
                font-semibold
                text-lg
                tracking-wide
                text-blue-300
              "
            >
              Security
            </h2>

            <div
              className="
                flex
                flex-col
                gap-3
                text-sm
                text-gray-400
              "
            >

              <span>Semgrep CE</span>

              <span>RAG Context</span>

              <span>LoRA-Tuned LLM</span>

              <span>Explainable Analysis</span>

              <span>Security Reports</span>

            </div>

          </div>

          {/* =================================================
              LEGAL
          ================================================= */}

          <div className="flex flex-col gap-5">

            <h2
              className="
                font-semibold
                text-lg
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
                text-sm
                text-gray-400
              "
            >

              <Link
                to="/Terms_and_con"
                className="
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                "
              >
                Terms & Conditions
              </Link>

              <Link
                to="/Privacy_Policy"
                className="
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                "
              >
                Privacy Policy
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

      <div
        className="
          text-center
          text-xs
          text-gray-600
          mt-5
          font-nova
        "
      >
        © {new Date().getFullYear()} NOVA.
        All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;