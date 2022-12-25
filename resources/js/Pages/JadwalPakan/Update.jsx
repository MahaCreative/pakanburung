import React, { useEffect } from 'react'
import { useForm, usePage } from '@inertiajs/inertia-react';
export default function Update({close, model}) {
    const { data, setData, put, errors } = useForm({
        id: model.id,
        jadwal:''
    })
    const change = (e) => {
      setData({...data, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        setData({
            ...data,
            id: model.id,
            jadwal: model.jam,
        })
        console.log(data);
    }, [model])

    const submit = () => {
        put(route('jadwal-pakan'), {
            onSuccess: close()
        })
    }
    
    return (
        <div>
        <label htmlFor="">Jadwal Pakan</label>
            <input value={data.jadwal} name='jadwal' onChange={change} className='w-full border border-emerald-400 my-2 px-2 rounded-md text-emerald-400 focus:outline-none focus:ring-emerald-200 focus:ring' type={'time'} placeholder='Jadwal Makan' />
            {errors.jadwal && (
                <p className='text-red-500 text-sm italic capitalize'>{errors.jadwal}</p>
            )}
        <button onClick={submit} className='bg-slate-700 block text-white rounded-lg py-2 px-4 hover:shadow-sm hover:shadow-emerald-300'>Submit</button>
    </div>
  )
}
