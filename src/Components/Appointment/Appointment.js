import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        const url = `https://book-appointment-server.onrender.com/appointment`;
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

                <div className='bg-slate-200'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2 appearance-none rounded-md relative block w-96 px-5 py-2 border border-slate-500  text-gray-900 ' placeholder='Write your name' type='text' {...register("name")} />
                        <input className='mb-2 appearance-none rounded-md relative block w-96 px-5 py-2 border border-slate-500  text-gray-900' placeholder='Write your email' type='email' {...register("email")} required />
                        <input className='mb-2 appearance-none rounded-md relative block w-96 px-5 py-2 border border-slate-500  text-gray-900' placeholder='Write your Phone(+91....)' type='text' {...register("phoneNumber")} />

                        <input className='mb-2 appearance-none rounded-md relative block w-96 px-5 py-2 border border-slate-500  text-gray-900' placeholder='Select the date ' type="date" {...register("date")} required />
                        <textarea className='mb-2 appearance-none rounded-md relative block w-96 px-5 py-2 border border-slate-500  text-gray-900' placeholder='Write a note' type="date" {...register("note")} />

                        <div className='flex justify-center mt-4 bg-slate-50'>
                            <input className=' bg-violet-600 rounded-xl hover:bg-violet-700 font-semibold text-white block w-40 px-3 py-2' value='Book Appointment' type="submit" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Appointment;