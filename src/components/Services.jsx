import React, { useState } from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'

const Services = () => {
    const [services, setServices] = useState([
        {
            image: '/img/se1.svg',
            title: '2 Wheeler',
            price: '48'
        },
        {
            image: '/img/se2.svg',
            title: '3 Wheeler',
            price: '448'
        },
        {
            image: '/img/se3.svg',
            title: 'Mini Truck',
            price: '999'
        },
        {
            image: '/img/se4.svg',
            title: 'Truck',
            price: '1599'
        },
    ])
  return (
    <Layout>
        <div className='w-10/12 m-auto py-8'>
            <h1 className='text-3xl font-bold'>Services</h1>
            <div className='h-[1px] bg-[#d1221d] mt-3' />
            <div className='flex flex-col gap-8'>
                    {
                        services.map((item, index) => (
                            <div key={index} className='grid grid-cols-3 bg-white shadow-2xl rounded-lg py-4 px-2'>
                                <img src={item.image} alt="" className='h-[237px] object-cover col-span-1 ' />
                                <div className=" flex flex-col justify-center gap-3 col-span-2 pr-4">
                                    <h1 className='text-3xl font-bold '>{item.title}</h1>
                                    <h1 className='text-xl font-semibold text-gray-600 '>Starting from <span className='font-bold text-2xl text-green-500'>₹{item.price}</span></h1>
                                    <p className='text-[14px] text-gray-500'>Base fare is inclusive of 1.0 km distance & 25 minutes of order time. Pricing may vary basis locality. Please note, road tax, parking fee, etc, will be applicable over and above ride fare.</p>
                                    <Link to={'/booking'} className='block py-2 px-4 bg-[#d1221d] w-fit text-white rounded hover:bg-[#f72822]'>Book Now</Link>
                                </div>
                            </div>
                        ))
                    }
            </div>
            <div className='h-[1px] bg-[#d1221d]' />
        </div>
    </Layout>
  )
}

export default Services
