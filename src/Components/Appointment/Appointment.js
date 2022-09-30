import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Appointment = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        const url = `https://manufacture-tribe.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success(' Appointment has been booked ')
                reset()
            })



    };

    return (
        <div>
            <h1 className='text-2xl mb-4 mt-5  text-center font-bold text-violet-800'>Book Your Appointment Today</h1>
            <section className='justify-center flex mt-10 justify-items-center'>

                <div className=''>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2 appearance-none rounded-none relative block w-96 px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='Write your name' type='text' {...register("name")} />
                        <input className='mb-2 appearance-none rounded-none relative block w-96 px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='Write your email' type='email' {...register("email")} required />
                        <input className='mb-2  appearance-none rounded-none relative block w-96 px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='Write your Phone(+91....)' type='text' {...register("phoneNumber")} />

                        <input className='mb-2 appearance-none rounded-none relative block w-96 px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='Select the date ' type="date" {...register("date")} required />
                        <textarea className='mb-2 appearance-none rounded-none relative block w-96 px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='Write a note' type="date" {...register("note")} />

                        <div className='flex justify-center mt-4'>
                            <input className=' bg-violet-600 rounded-md hover:bg-violet-700 font-semibold text-white block w-40 px-3 py-2' value='Book Appointment' type="submit" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Appointment;