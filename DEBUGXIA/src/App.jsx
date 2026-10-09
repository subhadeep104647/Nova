import React, { useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Public Pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import How_It_Works from "./pages/How_It_Works";
import SingIn from "./pages/SingIn";
import Get_Started from "./pages/Get_Started";
import About from "./pages/About";
import Not_Found from "./pages/Not_Found";
import Terms_and_con from "./pages/Terms_and_con";
import Privacy_Policy from "./pages/Privacy_Policy";

// Private Pages
import Profile from "./pages2.o/Profile";
import Edit_Profile from "./pages2.o/Edit_Profile";
import NewChat from "./pages2.o/NewChat";
import Analysis from "./pages2.o/Analysis";
import Notebook from "./pages2.o/Notebook";


// =====================================================
// PROTECTED ROUTE
// =====================================================

const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to="/SingIn" replace />;
  }

  return children;
};


// =====================================================
// PUBLIC ROUTE
// =====================================================

const PublicRoute = ({ isAuth, children }) => {
  if (isAuth) {
    return <Navigate to="/NewChat" replace />;
  }

  return children;
};


// =====================================================
// APP
// =====================================================

const App = () => {

  const [isAuth, setIsAuth] = useState(false);

  const location = useLocation();


  // =====================================================
  // AFTER LOGIN ROUTES
  // =====================================================

  const afterLoginRoutes = [
    "/NewChat",
    "/Profile",
    "/Edit_Profile",
    "/Analysis",
    "/Notebook",
  ];


  // =====================================================
  // AUTH ROUTES WITHOUT NAVBAR
  // =====================================================

  const authPages = [
    "/SingIn",
    "/Get_Started",
    "/About",
    "/Terms_and_con",
    "/Privacy_Policy",
  ];


  // =====================================================
  // CHECK CURRENT ROUTE
  // =====================================================

  const isAfterLoginRoute =
    afterLoginRoutes.includes(location.pathname);

  const isAuthPage =
    authPages.includes(location.pathname);


  // =====================================================
  // SHOW LOGGED-IN SIDEBAR
  // =====================================================

  const showAfterLoginLayout =
    isAuth && isAfterLoginRoute;


  return (
    <div
      className="
        min-h-screen
        w-full
        text-white
        overflow-x-hidden
        scroll-smooth
        bg-cover
        relative
      "
    >


      {/* =====================================================
          FLOATING PARTICLES + SHOOTING STARS
      ===================================================== */}

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

        {/* Floating Particles */}

        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute bg-nav rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}


        {/* Shooting Stars */}

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute"
            initial={{
              left: "-15%",
              top: `${-10 + i * 25}%`,
              opacity: 0,
            }}
            animate={{
              left: "115%",
              top: `${70 + i * 12}%`,
              opacity: [0, 0.8, 1, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          >

            {/* Shooting Star Trail */}

            <div
              className="
                absolute
                w-56
                h-[2px]
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-blue-200/30
                to-white
                rotate-[25deg]
                blur-[1px]
              "
              style={{
                boxShadow:
                  "0 0 8px rgba(255,255,255,0.8), 0 0 20px rgba(120,180,255,0.6)",
              }}
            />


            {/* Star */}

            <div
              className="
                absolute
                -top-[7px]
                -right-[5px]
                text-white
                text-2xl
                leading-none
              "
              style={{
                textShadow:
                  "0 0 5px white, 0 0 12px white, 0 0 25px rgba(120,190,255,0.9)",
              }}
            />

          </motion.div>
        ))}

      </div>


      {/* =====================================================
          NAVBAR / SIDEBAR
          
          Public pages:
          Navbar

          Logged-in pages:
          New Sidebar
          
          SignIn + GetStarted + About + Policies:
          No navbar/sidebar
      ===================================================== */}

      {!isAuthPage && (
        showAfterLoginLayout ? (
          <Sidebar />
        ) : (
          <Navbar
            isAuth={isAuth}
            setIsAuth={setIsAuth}
          />
        )
      )}


      {/* =====================================================
          ROUTES
      ===================================================== */}

      <Routes>


        {/* =================================================
            PUBLIC ROUTES
        ================================================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/Features"
          element={<Features />}
        />

        <Route
          path="/How_It_Works"
          element={<How_It_Works />}
        />

        <Route
          path="/Get_Started"
          element={<Get_Started />}
        />

        <Route
          path="/About"
          element={<About />}
        />


        {/* =================================================
            SIGN IN
        ================================================= */}

        <Route
          path="/SingIn"
          element={
            <PublicRoute isAuth={isAuth}>
              <SingIn
                setIsAuth={setIsAuth}
              />
            </PublicRoute>
          }
        />


        {/* =================================================
            AFTER LOGIN
        ================================================= */}

        <Route
          path="/NewChat"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <NewChat />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Profile"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Edit_Profile"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Edit_Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Analysis"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Analysis />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Notebook"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Notebook />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            POLICIES
        ================================================= */}

        <Route
          path="/Terms_and_con"
          element={<Terms_and_con />}
        />

        <Route
          path="/Privacy_Policy"
          element={<Privacy_Policy />}
        />


        {/* =================================================
            404
        ================================================= */}

        <Route
          path="*"
          element={<Not_Found />}
        />

      </Routes>

    </div>
  );
};


export default App;