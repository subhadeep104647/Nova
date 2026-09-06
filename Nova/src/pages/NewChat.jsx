import React from "react";
import { motion } from "framer-motion";
import { IoSparklesOutline, IoArrowUp } from "react-icons/io5";
import Logo1 from "../icons/Logo1";

const NewChat = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">

      {/* ================= CHAT CONTENT ================= */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          delay: 0,
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full max-w-3xl"
      >

        {/* ================= GREETING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            duration: 0.8,
          }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <div
              className="
                w-12
                h-12
                rounded-2xl
                flex
                items-center
                justify-center
                bg-white/[0.06]
                border
                border-white/[0.10]
                backdrop-blur-xl
              "
            >
              <Logo1/>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-['Poppins'] font-semibold text-white tracking-wide">
            How can I help you?
          </h1>

          <p className="mt-3 text-gray-400 font-['Poppins'] text-sm md:text-base">
            Ask anything, explore ideas, or start a conversation.
          </p>
        </motion.div>


        {/* ================= CHAT BOX ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 1.1,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            min-h-[120px]

            rounded-3xl

            bg-white/[0.055]
            backdrop-blur-3xl
            backdrop-saturate-150

            border
            border-white/[0.10]

            shadow-[0_20px_60px_rgba(0,0,0,0.25)]

            p-5

            transition-all
            duration-300

            focus-within:border-white/[0.20]
            focus-within:bg-white/[0.07]
          "
        >

          {/* ================= TEXTAREA ================= */}
          <textarea
            placeholder="Ask anything..."
            className="
              w-full
              min-h-[60px]
              resize-none

              bg-transparent

              outline-none

              text-white
              text-base

              placeholder:text-gray-500

              font-['Poppins']

              scrollbar-hide
            "
          />

          {/* ================= BOTTOM CONTROLS ================= */}
          <div className="flex items-center justify-between mt-4">

            {/* Left side */}
            <div className="flex items-center gap-2">

              <button
                className="
                  px-4
                  py-2
                  rounded-xl

                  bg-white/[0.04]

                  border
                  border-white/[0.07]

                  text-gray-400
                  text-sm

                  hover:bg-white/[0.09]
                  hover:text-white

                  transition
                "
              >
                + Add
              </button>

            </div>


            {/* Send button */}
            <button
              className="
                w-10
                h-10

                rounded-full

                flex
                items-center
                justify-center

                bg-white/[0.08]

                border
                border-white/[0.10]

                text-gray-300

                hover:bg-purple-500
                hover:text-white

                transition-all
                duration-300
              "
            >
              <IoArrowUp className="text-xl" />
            </button>

          </div>

        </motion.div>

      </motion.div>

    </div>
  );
};

export default NewChat;