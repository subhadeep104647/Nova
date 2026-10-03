import React from 'react'
import { CodeXml } from 'lucide-react'
import { TriangleAlert } from 'lucide-react'
import { Cpu } from 'lucide-react'
import { CircleCheck } from 'lucide-react'
import { Minus } from 'lucide-react'
import Navbar from '../components/Navbar'

const How_It_Works = () => {
  return (
    
      <div className=' flex flex-col items-center justify-between gap-20 w-[100%] aspect-[16/9]'>

        <div className='flex flex-col items-center justify-between gap-10 mt-30'>
          <h1 className='font-bold font-body text-5xl tracking-normal'>From error to <span className='bg-gradient-to-r from-button to-nav bg-clip-text text-transparent'>solution</span> in seconds</h1>
        </div>

        <div>

          <div className=' flex flex-row items-center justify-between w-200'>
            <div className=' rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl py-5 px-5'><CodeXml color="#DFC0FE" strokeWidth={1.5} /></div>
            <div className=' rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl py-5 px-5'><TriangleAlert color="#DFC0FE" strokeWidth={1.5} /></div>
            <div className=' rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl py-5 px-5'><Cpu color="#DFC0FE" strokeWidth={1.5} /></div>
            <div className=' rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl py-5 px-5'><CircleCheck color="#DFC0FE" strokeWidth={1.5} /></div>
          </div>

          <div className=' ml-10 mr-10 mt-4 '>
            <img src="/public/Line.svg" alt="" className='w-180' />
          </div>

        </div>

        <div className=' -mt-17 flex flex-row items-center justify-between w-230 gap-2'>

            <div className=' flex flex-col items-center justify-between'>
              <h1 className=' text-lg tracking-wide font-medium font-body'>Write Code</h1>
              <p className='font-medium text-base text-gray-300'>Developer writes code in<br></br><span className=' ml-10'>VS Code as usual.</span></p>
            </div>
            <div className=' flex flex-col items-center justify-between'>
              <h1 className=' text-lg tracking-wide font-medium font-body'>Error Detected</h1>
              <p className='font-medium text-base text-gray-300'>Extension detects errors in real-<br></br><span className=' ml-25'>time.</span></p>
            </div>
            <div className=' flex flex-col items-center justify-between'>
              <h1 className=' text-lg tracking-wide font-medium font-body'>AI Analyzes</h1>
              <p className='font-medium text-base text-gray-300'>AI processes the issue and<br></br><span className=' ml-12'>finds solutions.</span></p>
            </div>
            <div className=' flex flex-col items-center justify-between'>
              <h1 className=' text-lg tracking-wide font-medium font-body'>Solution Appears</h1>
              <p className='font-medium text-base text-gray-300'>Extension detects errors in real-<br></br><span className=' ml-16'>finds solutions.</span></p>
            </div>
          </div>

          <div className=' flex items-center py-5 px-50'>
            <img src="/public/NOVA.png" alt=""  className='border-2 border-gray-300 rounded-2xl'/>
          </div>          
    </div>
  
  )
}

export default How_It_Works