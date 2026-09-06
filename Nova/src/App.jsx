import React from "react";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import NewChat from "./pages/NewChat";

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#171427] scroll-smooth">

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-[#171427] opacity-90 z-0" />


      {/* ================= ANIMATED GRADIENT CIRCLE 1 ================= */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          left-20
          w-72
          h-72
          rounded-full
          bg-purple-500
          blur-3xl
          opacity-20
          z-0
        "
      />


      {/* ================= ANIMATED GRADIENT CIRCLE 2 ================= */}
      <motion.div
        animate={{
          x: [0, -120, 50, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20
          right-20
          w-96
          h-96
          rounded-full
          bg-pink-500
          blur-3xl
          opacity-20
          z-0
        "
      />


      {/* ================= FLOATING PARTICLES ================= */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="
            absolute
            bg-white
            rounded-full
            z-0
          "
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}


      {/* ================= APPLICATION CONTENT ================= */}
      <div className="relative z-10 min-h-screen">

        {/* ================= SIDEBAR ================= */}
        <Sidebar />


        {/* ================= MAIN CONTENT ================= */}
        <main
          className="
            min-h-screen
            transition-all
            duration-300

            /* Mobile */
            ml-16
            px-4
            py-5

            /* Tablet */
            sm:ml-16
            sm:px-6

            /* Desktop */
            md:ml-70
            md:px-10
            lg:px-10
          "
        >

          <Routes>
            <Route
              path="/NewChat"
              element={<NewChat />}
            />
          </Routes>

        </main>

      </div>

    </div>
  );
};

export default App;
