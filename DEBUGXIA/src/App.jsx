import React, { useState } from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'

import Home from './pages/Home'
import Features from './pages/Features'
import How_It_Works from './pages/How_It_Works'
import Dashboard from './pages/Dashboard'
import SingIn from './pages/SingIn'
import Get_Started from './pages/Get_Started'
import About from './pages/About'
import Not_Found from './pages/Not_Found'
import Footer from './components/Footer'
import Terms_and_con from './pages/Terms_and_con'
import Privacy_Policy from './pages/Privacy_Policy'
import Profile from './pages2.o/Profile'
import Edit_Profile from './pages2.o/Edit_Profile'
import NewChat from './pages2.o/NewChat'
import Footer2 from './components/Footer2'

import { motion } from 'framer-motion'


// Protected Route (only for Home2 now)
const ProtectedRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/SingIn" />;
};


// Public Route
const PublicRoute = ({ isAuth, children }) => {
  return !isAuth ? children : <Navigate to="/NewChat" />;
};


const App = () => {

  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();

  // Navbar2 only for Home2 (after login)
  const afterLoginRoutes = [
    "/Profile",
    "/Edit_Profile",
    "/NewChat",
  ];

  const isAfterLoginRoute = afterLoginRoutes.includes(location.pathname);


  return (
    <div className='h-screen text-white overflow-x-hidden scroll-smooth min-h-screen overflow-y-auto bg-cover w-[100%] aspect-[16/9] relative'>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
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
        {/* 🌠 Slow Smooth Shooting Stars */}
{[...Array(3)].map((_, i) => (
  <motion.div
    key={`shooting-${i}`}
    className="absolute"
    initial={{
      left: "-12%",
      top: `${15 + i * 25}%`,
      opacity: 0,
    }}
    animate={{
      left: "112%",
      top: `${40 + i * 18}%`,
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

    {/* Long glowing trail */}
    <div
      className="
        absolute
        w-52
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
          "0 0 8px rgba(255,255,255,0.7), 0 0 20px rgba(120,180,255,0.6)",
      }}
    />

    {/* Glowing star head */}
    <div
      className="
        absolute
        -top-[6px]
        -right-[4px]
        text-white
        text-2xl
      "
      style={{
        textShadow:
          "0 0 5px white, 0 0 12px white, 0 0 25px rgba(120,190,255,0.9)",
      }}
    >
    </div>

  </motion.div>
))}
      </div>


      {/* CONDITIONAL NAVBAR */}
      {isAuth && isAfterLoginRoute ? (
        <Navbar2 setIsAuth={setIsAuth} />
      ) : (
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      )}


      <Routes>

        {/* PUBLIC (BEFORE LOGIN) */}
        <Route path='/' element={<Home />} />
        <Route path='/Features' element={<Features />} />
        <Route path='/How_It_Works' element={<How_It_Works />} />
        <Route path='/Get_Started' element={<Get_Started />} />
        <Route path='/About' element={<About />} />
        <Route path='/Dashboard' element={<Dashboard />} />

        {/* SIGN IN */}
        <Route
          path='/SingIn'
          element={
            <PublicRoute isAuth={isAuth}>
              <SingIn setIsAuth={setIsAuth} />
            </PublicRoute>
          }
        />


        {/* AFTER LOGIN ONLY */}

        <Route
          path='/Profile'
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path='/NewChat'
          element={
            <ProtectedRoute isAuth={isAuth}>
              <NewChat />
            </ProtectedRoute>
          }
        />

        <Route
          path='/Edit_Profile'
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Edit_Profile/>
            </ProtectedRoute>
          }
        />

        
        {/* POLICIES */}
        <Route path='/Terms_and_con' element={<Terms_and_con />} />
        <Route path='/Privacy_Policy' element={<Privacy_Policy />} />


        {/* NOT FOUND */}
        <Route path='*' element={<Not_Found />} />

      </Routes>


      {isAuth && isAfterLoginRoute ? (
        <Footer2 setIsAuth={setIsAuth} />
      ) : (
        <Footer isAuth={isAuth} setIsAuth={setIsAuth} />
      )}

    </div>
  )
}

export default App