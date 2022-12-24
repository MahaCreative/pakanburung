import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import toast, { Toaster } from 'react-hot-toast';

export default function App({ children }) {
    const [open, setOpen] = useState(false)
    
  return (
      <div className='bg-emerald-400 min-h-screen overflow-x-hidden'>
          <Toaster/>
          <div>
              <Navbar />
              <div className=' min-h-screen w-full'>
                  {children}
              </div>
              <div className='flex justify-between bg-emerald-500 py-2.5 px-4 mt-8 text-white'>
                  <p>CopyRight By MCDeveloper.click</p>
              </div>
          </div>
      </div>
  )
}
