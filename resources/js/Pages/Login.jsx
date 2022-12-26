import { Link, useForm } from '@inertiajs/inertia-react'
import React from 'react'

export default function Login() {
    const {data, setData, post, errors} = useForm({email:'', password:'', password_confirmation:''})
    const submitHandler = () => {
        post(route('login'));
    }
    const changeHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    return (
      <div className='w-full min-h-screen bg-emerald-400 flex items-center justify-between px-16 font-electro gap-3'>
          <div className='flex flex-col md:flex-row gap-3'>
              <div className='flex-col w-[500px] justify-center hidden md:flex'>
                  <img src="images/burung.png" alt="" className=' w-[80%]' />      
              </div>
              <div className='md:ml-16 rounded-lg lg:w-[70%] bg-white shadow-sm shadow-slate-400 backdrop-blur-sm px-8 py-2.5'>
                      <p className='text-xl md:text-2xl lg:text-4xl font-bold text-emerald-400 border-b-4 border-emerald-400 py-2.5 border-dashed'>Aplikasi Pakan Burung</p>
                  <p className='text-xl md:text-2xl lg:text-4xl  font-bold text-emerald-400 text-center my-2'>Login</p>
                  <div className="border border-emerald-400 p-4 my-3 rounded-lg border-dashed shadow-md shadow-gray-500/50">
                      <label htmlFor="username" className='text-emerald-400 capitalize'>Username</label>
                      <input onChange={changeHandler} name='email' className='w-full border border-emerald-400 border-dashed my-2 px-2 rounded-md text-emerald-400 focus:outline-none focus:ring-emerald-200 focus:ring' type={'email'} placeholder='Email' />
                      {errors && (<p className='text-red-500 italic text-sm'>{errors.email}</p>)}
                      <label htmlFor="password" className='text-emerald-400 capitalize'>Password</label>
                      <input onChange={changeHandler} name='password' className='w-full border border-emerald-400 border-dashed my-2 px-2 rounded-md text-emerald-400 focus:outline-none focus:ring-emerald-200 focus:ring' type={'password'} placeholder='Password' />
                     {errors && (<p className='text-red-500 italic text-sm'>{errors.password}</p>)}
                      <label htmlFor="password_confirmation" className='text-emerald-400 capitalize'>Password Confirmation</label>
                      <input onChange={changeHandler} name='password_confirmation' className='w-full border border-emerald-400 border-dashed my-2 px-2 rounded-md text-emerald-400 focus:outline-none focus:ring-emerald-200 focus:ring' type={'password'} placeholder='Resent_password' />
                      
                        {errors && (<p className='text-red-500 italic text-sm'>{errors.password}</p>)}
                        <div className="flex gap-3 items-center">
                            <button onClick={submitHandler} className='px-4 border border-emerald-400 border-dashed my-2 px-2 rounded-md text-emerald-400 focus:outline-none focus:ring-emerald-200 focus:ring hover:bg-emerald-300 hover:text-white hover:border-white transition duration-300 ease-in-out py-2.5'>Login</button >
                            <Link href={route('forgot-password')} className='text-emerald-400'>Lupa Password</Link >
                        </div>
                  </div>
                </div>    
          </div>
    </div>
  )
}
