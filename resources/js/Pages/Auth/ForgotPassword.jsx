import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react'
import toast,{ Toaster } from 'react-hot-toast';

export default function ForgotPassword() {
    const {data, setData, post, errors} = useForm({email:''})
    const submitHandler = () => {
        post(route('forgot-password'));
    }
    const changeHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const { flash } = usePage().props;

    useEffect(() => {
        flash.type && toast[flash.type](flash.message);
    });
    return (
        <div>
            <Toaster/>
            <div className='w-full min-h-screen bg-emerald-400 flex items-center justify-between px-16 font-electro gap-3'>
          <div className='flex flex-col md:flex-row gap-3'>
              <div className='flex-col w-[500px] justify-center hidden md:flex'>
                  <img src="images/burung.png" alt="" className=' w-[80%]' />      
              </div>
              <div className='md:ml-16 rounded-lg lg:w-[70%] bg-white shadow-sm shadow-slate-400 backdrop-blur-sm px-8 py-2.5'>
                      <p className='text-xl md:text-2xl lg:text-4xl font-bold text-emerald-400 border-b-4 border-emerald-400 py-2.5 border-dashed'>Aplikasi Pakan Burung</p>
                      <p className='text-base text-emerald-400 my-2'>Silahkan Masukkan Email untuk mendapatkan Email Reset Password</p>
                      <div className="border border-emerald-400 p-4 my-3 rounded-lg border-dashed shadow-md shadow-gray-500/50">
                          <label htmlFor="username" className='text-emerald-400 capitalize'>Insert Email</label>
                          <input onChange={changeHandler} name='email' className='w-full border border-emerald-400 border-dashed my-2 px-2 rounded-md text-emerald-400 focus:outline-none focus:ring-emerald-200 focus:ring' type={'email'} placeholder='Email' />
                          {errors.email && (<p className='text-red-500 italic text-sm'>{errors.email}</p>)}
                            <div className="flex gap-3">
                                <button onClick={submitHandler} className='px-4 border border-emerald-400 border-dashed my-2 px-2 rounded-md text-emerald-400 focus:outline-none focus:ring-emerald-200 focus:ring hover:bg-emerald-300 hover:text-white hover:border-white transition duration-300 ease-in-out py-2.5'>Send Reset Link</button >
                                <Link href={route('login')} className='px-4 border border-emerald-400 border-dashed my-2 px-2 rounded-md text-emerald-400 focus:outline-none focus:ring-emerald-200 focus:ring hover:bg-emerald-300 hover:text-white hover:border-white transition duration-300 ease-in-out py-2.5'>Back To Login</Link >
                          </div>
                      </div>
                    </div>
              </div>
              </div>
      </div>
  )
}
