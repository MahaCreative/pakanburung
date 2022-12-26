import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import toast, { Toaster } from 'react-hot-toast';
import { usePage } from '@inertiajs/inertia-react';

export default function App({ children }) {
    const [open, setOpen] = useState(false)
    const { flash } = usePage().props;

    useEffect(() => {
        flash.type && toast[flash.type](flash.message);
    });
  return (
      <div className='touch-none bg-emerald-400 min-h-screen overflow-x-hidden font-electro'>
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
