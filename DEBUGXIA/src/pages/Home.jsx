import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Features from "./Features";
import How_It_Works from "./How_It_Works";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen overflow-hidden bg-black">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative flex flex-col items-center w-full min-h-[850px] overflow-hidden">


        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="relative z-30 flex flex-col items-center gap-8 mt-32">

          {/* TITLE */}

          <h1 className="font-bold text-7xl tracking-normal text-center">

            <motion.span
              initial={{
                opacity: 0,
                y: -50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="inline-block tracking-wide"
            >

              Your AI{" "}

              <span
                className="
                  font-body
                  bg-gradient-to-r
                  from-button
                  via-purple-400
                  to-sky-300
                  bg-clip-text
                  text-transparent
                "
              >
                Code Security Assistant
              </span>

            </motion.span>

          </h1>


          {/* SUBTITLE */}

          <p
            className="
              font-medium
              text-xl
              text-gray-300
              tracking-wide
              text-center
            "
          >

            <motion.span
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="inline-block tracking-wide"
            >

              <span className="px-7 font-body">
                Detect vulnerabilities. Understand bugs. Secure your code.
              </span>

              <br />

              Get AI-powered explanations and remediation guidance for your code.

            </motion.span>

          </p>


        </div>

        <motion.span
              initial={{
                opacity: 0,
                xy: 50,
              }}
              animate={{
                opacity: 1,
                xy: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="inline-block tracking-wide"
            >


        {/* =====================================================
            PLANET AREA
            POSITION IS UNCHANGED
        ===================================================== */}

        <div
          className="
            absolute
            bottom-[-190px]
            left-1/2
            -translate-x-1/2
            z-10
          "
        >

          {/* =================================================
              OUTER PLANET GLOW
          ================================================= */}

          <motion.div
            className="
              absolute
              inset-[-100px]
              rounded-full
              bg-purple-600/20
              blur-[80px]
            "
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* =================================================
              BACK RING
          ================================================= */}

          <div
            className="
              absolute
              top-[42%]
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[850px]
              h-[190px]
              rounded-[50%]
              rotate-[-8deg]
              border-[10px]
              border-purple-300/15
              shadow-[0_0_30px_rgba(167,139,250,0.15)]
              pointer-events-none
            "
          />

          {/* Bright inner ring */}

          <div
            className="
              absolute
              top-[42%]
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[850px]
              h-[190px]
              rounded-[50%]
              rotate-[-8deg]
              border-[3px]
              border-purple-200/25
              pointer-events-none
            "
          />

          {/* Thin outer ring */}

          <div
            className="
              absolute
              top-[42%]
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[920px]
              h-[210px]
              rounded-[50%]
              rotate-[-8deg]
              border
              border-sky-300/15
              pointer-events-none
            "
          />


          {/* =================================================
              PLANET
              SAME SIZE + SAME POSITION
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              w-[620px]
              h-[620px]
              rounded-full
              overflow-hidden
              border
              border-purple-200/20
              shadow-[0_0_110px_rgba(139,92,246,0.38)]
            "
            style={{
              background: `
                radial-gradient(
                  circle at 31% 23%,
                  #e8ddff 0%,
                  #b79be8 5%,
                  #74509e 13%,
                  #41255f 28%,
                  #21112f 48%,
                  #0b0710 72%,
                  #020104 100%
                )
              `,
            }}
          >

            {/* =================================================
                SVG PROCEDURAL TEXTURE
            ================================================= */}

            <svg
              className="
                absolute
                inset-0
                w-full
                h-full
                opacity-40
                mix-blend-screen
              "
              viewBox="0 0 620 620"
              preserveAspectRatio="none"
            >

              <defs>

                <filter id="planetNoise">

                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.012 0.055"
                    numOctaves="4"
                    seed="8"
                  />

                  <feColorMatrix
                    type="saturate"
                    values="0"
                  />

                </filter>

              </defs>

              <rect
                width="620"
                height="620"
                filter="url(#planetNoise)"
                opacity="0.18"
              />

            </svg>


            {/* =================================================
                ATMOSPHERIC CLOUD BANDS
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                opacity-50
              "
              style={{
                background: `
                  repeating-linear-gradient(
                    4deg,

                    transparent 0px,
                    transparent 22px,

                    rgba(216,180,254,0.06) 27px,
                    rgba(167,139,250,0.13) 34px,

                    transparent 46px,
                    transparent 68px
                  )
                `,
              }}
            />


            {/* =================================================
                LARGE CLOUD BELT
            ================================================= */}

            <motion.div
              className="
                absolute
                top-[23%]
                left-[-15%]
                w-[700px]
                h-[85px]
                rounded-full
                bg-purple-200/10
                blur-[25px]
                rotate-[-7deg]
              "
              animate={{
                x: [0, 25, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            {/* =================================================
                SECOND CLOUD BELT
            ================================================= */}

            <motion.div
              className="
                absolute
                top-[48%]
                left-[-5%]
                w-[650px]
                h-[65px]
                rounded-full
                bg-indigo-300/10
                blur-[24px]
                rotate-[5deg]
              "
              animate={{
                x: [0, -30, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            {/* =================================================
                THIRD CLOUD BELT
            ================================================= */}

            <div
              className="
                absolute
                top-[67%]
                left-[8%]
                w-[550px]
                h-[55px]
                rounded-full
                bg-purple-400/10
                blur-[22px]
                rotate-[-4deg]
              "
            />


            {/* =================================================
                BRIGHT SPECULAR LIGHT
            ================================================= */}

            <div
              className="
                absolute
                top-[3%]
                left-[8%]
                w-[300px]
                h-[250px]
                rounded-full
                bg-white/15
                blur-[65px]
              "
            />


            {/* Small bright reflection */}

            <div
              className="
                absolute
                top-[12%]
                left-[18%]
                w-[170px]
                h-[100px]
                rounded-full
                bg-white/10
                blur-[35px]
              "
            />


            {/* =================================================
                PLANET SHADOW / TERMINATOR
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                rounded-full
              "
              style={{
                background: `
                  radial-gradient(
                    ellipse at 20% 28%,
                    transparent 0%,
                    transparent 32%,
                    rgba(0,0,0,0.08) 45%,
                    rgba(0,0,0,0.42) 66%,
                    rgba(0,0,0,0.88) 100%
                  )
                `,
              }}
            />


            {/* =================================================
                LOWER SHADOW
            ================================================= */}

            <div
              className="
                absolute
                bottom-0
                left-0
                w-full
                h-[45%]
                rounded-b-full
                bg-gradient-to-t
                from-black/80
                via-black/25
                to-transparent
              "
            />


            {/* =================================================
                ATMOSPHERIC RIM
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                border-[7px]
                border-purple-200/10
                shadow-[inset_0_0_45px_rgba(196,181,253,0.25)]
              "
            />


            {/* =================================================
                LEFT LIGHT RIM
            ================================================= */}

            <div
              className="
                absolute
                top-[7%]
                left-[4%]
                w-[8px]
                h-[78%]
                rounded-full
                bg-purple-200/35
                blur-[8px]
              "
            />


            {/* =================================================
                ATMOSPHERIC HIGHLIGHT
            ================================================= */}

            <div
              className="
                absolute
                top-[4%]
                left-[15%]
                w-[68%]
                h-[18%]
                rounded-full
                bg-purple-100/10
                blur-[28px]
              "
            />

          </motion.div>


          {/* =================================================
              FRONT RING
          ================================================= */}

          <motion.div
            className="
              absolute
              top-[42%]
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[1050px]
              h-[190px]
              rounded-[50%]
              rotate-[-8deg]
              border-[7px]
              border-purple-300/22
              pointer-events-none
            "
            animate={{
              rotate: [-8, -5, -8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Front ring highlight */}

          <div
            className="
              absolute
              top-[42%]
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[1050px]
              h-[190px]
              rounded-[50%]
              rotate-[-8deg]
              border-[2px]
              border-white/15
              pointer-events-none
            "
          />

        </div>


        {/* =====================================================
            PLANET FADE
        ===================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-[250px]
            z-20
            pointer-events-none
            bg-gradient-to-t
            from-black
            via-black/50
            to-transparent
          "
        />
        </motion.span>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="relative z-30">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="inline-block tracking-wide"
        >

          <Features />

        </motion.div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="relative z-30 mt-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="inline-block tracking-wide"
        >

          <How_It_Works />

        </motion.div>

      </section>

    </div>
  );
};

export default Home;