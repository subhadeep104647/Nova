import React from 'react'
import {Download} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
  
      <div className=' flex flex-col items-center justify-between gap-10 w-[100%] mb-30'>
      <div className='flex flex-col items-center justify-between gap-8 mt-30'>
        <h1 className='font-bold text-5xl tracking-wide font-body'>Start coding <span className='bg-gradient-to-r from-button to-nav bg-clip-text text-transparent'>smarter</span> with AI</h1>
        <p className='font-medium text-lg text-gray-300 tracking-wide font-body'>Join thousands of developers who debug faster and learn better with <br></br><span className='ml-50'>CodeMentor AI.</span></p>
      </div>

      <div className=' font-semibold font-body text-lg text-gray-700 tracking-wide bg-gradient-to-r from-button to-nav rounded-2xl py-3 px-10'>
        <button><Link to='/SingIn'>Install Extension</Link></button>
      </div>
    </div>
  )
}

export default Dashboard