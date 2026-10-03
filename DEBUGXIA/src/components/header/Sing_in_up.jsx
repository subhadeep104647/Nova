import React from 'react'
import{Link} from 'react-router-dom'
import SingIn from '../../pages/SingIn'
import Get_Started from '../../pages/Get_Started'

const Sing_in_up = () => {
  return (

      <div className='list-none flex items-center flex-row justify-end gap-10 absolute right-10 text-base font-semibold font-nova tracking-wide'>
        <Link to='/SingIn'>SingIn</Link>
        <button className='py-1.5 px-4 text-lg font-semibold font-nova rounded-2xl tracking-wide bg-gradient-to-r from-button to-nav text-gray-700'><Link to='/Get_Started'>Get Started</Link></button>
    </div>
  )
}


export default Sing_in_up