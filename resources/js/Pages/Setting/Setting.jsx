import { Link, useForm, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import App from '../../Layout/App'
export default function Setting() {
    const {auth} = usePage().props
    const {data, setData, post, errors} = useForm({id:auth.user.id ,email:auth.user.email, name:auth.user.name,password:auth.user.password, password_confirmation:''})
    const submitHandler = () => {
        post(route('setting-update'));
    }
    const changeHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    return (
      <div className='w-full min-h-screen bg-emerald-400 flex items-center justify-between px-16 font-electro gap-3'>
          <div className='flex'>
              <div className='flex flex-col w-[500px] justify-center'>
                  <img src="images/burung.png" alt="" className=' w-[80%]' />
                  
              </div>
              <div className='ml-16 rounded-lg w-[520px] bg-white shadow-sm shadow-slate-400 backdrop-blur-sm px-8 py-2.5'>
                    <p className='text-4xl font-bold text-emerald-400 border-b-4 border-emerald-400 py-2.5 border-dashed'>Aplikasi Pakan Burung</p>
                  <p className='text-emerald-400 my-2'>Setting User Account</p>
                  <div className="border border-emerald-400 p-4 my-3 rounded-lg border-dashed shadow-md shadow-gray-500/50">
                  <label htmlFor="username" className='text-emerald-400 capitalize'>Name</label>
                      <input value={auth.user.name} onChange={changeHandler} name='name' className='w-full border border-emerald-400 border-dashed my-2 px-2 rounded-md text-emerald-400 focus:outline-none focus:ring-emerald-200 focus:ring' type={'text'} placeholder='Name' />
                        {errors.name && (<p className='text-red-500 italic text-sm'>{errors.name}</p>)}
                        
                        <label htmlFor="username" className='text-emerald-400 capitalize'>Username</label>
                      <input value={auth.user.email} onChange={changeHandler} name='email' className='w-full border border-emerald-400 border-dashed my-2 px-2 rounded-md text-emerald-400 focus:outline-none focus:ring-emerald-200 focus:ring' type={'email'} placeholder='Email' />
                      {errors.email && (<p className='text-red-500 italic text-sm'>{errors.email}</p>)}
                      <label htmlFor="password" className='text-emerald-400 capitalize'>Password</label>
                      <input onChange={changeHandler} name='password' className='w-full border border-emerald-400 border-dashed my-2 px-2 rounded-md text-emerald-400 focus:outline-none focus:ring-emerald-200 focus:ring' type={'password'} placeholder='Password' />
                     {errors.password && (<p className='text-red-500 italic text-sm'>{errors.password}</p>)}
                      <label htmlFor="password_confirmation" className='text-emerald-400 capitalize'>Password Confirmation</label>
                      <input onChange={changeHandler} name='password_confirmation' className='w-full border border-emerald-400 border-dashed my-2 px-2 rounded-md text-emerald-400 focus:outline-none focus:ring-emerald-200 focus:ring' type={'password'} placeholder='Resent_password' />
                      {errors.password && (<p className='text-red-500 italic text-sm'>{errors.password}</p>)}
                        <div className="flex gap-3 items-center">
                            <button onClick={submitHandler} className='px-4 border border-emerald-400 border-dashed my-2 px-2 rounded-md text-emerald-400 focus:outline-none focus:ring-emerald-200 focus:ring hover:bg-emerald-300 hover:text-white hover:border-white transition duration-300 ease-in-out py-2.5'>Update</button > 
                        </div>
                  </div>
                </div>    
          </div>
    </div>
  )
}
Setting.layout = (page) => <App children={page}/>