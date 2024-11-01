import  { useState } from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'

const Services = () => {
  
    const [services, setServices] = useState([
        {
            id: 1,
            image: '/img/se1.svg',
            title: '2 Wheeler',
            price: '48'
        },
        {
            id: 2,
            image: '/img/se2.svg',
            title: '3 Wheeler',
            price: '448'
        },
        {   
            id: 3,
            image: '/img/se3.svg',
            title: 'Mini Truck',
            price: '999'
        },
        {
            id: 4,
            image: '/img/se4.svg',
            title: 'Truck',
            price: '1599'
        },
    ])
  return (
    <Layout>
        <div className='md:w-6/12 w-11/12 m-auto py-8'>
            <h1 className='text-3xl font-bold'>Services</h1>
            <div className='h-[1px] bg-[#d1221d] mt-3' />
            <div className='gap-8 mt-3 grid md:grid-cols-2 grid-cols-1'>
                    {
                        services.map((item) => (
                            <div key={services.id} className=' bg-white shadow-2xl rounded-lg py-4 px-2 flex justify-center flex-col items-center'>
                                <img src={item.image} alt="" className='w-[337px] object-cover' />
                                <div className=" flex flex-col justify-center gap-3 mt-3 p-6">
                                    <h1 className='text-3xl font-bold '>{item.title}</h1>
                                    <h1 className='text-xl font-semibold text-gray-600 '>Starting from <span className='font-bold text-2xl text-gray-600'>₹{item.price}</span></h1>
                                    <p className='text-[14px] text-gray-500'>Base fare is inclusive of 1.0 km distance & 25 minutes of order time. Pricing may vary basis locality.</p>
                                    <Link to={`/booking/${item.id}`} className='block py-2 px-4 bg-[#d1221d] w-fit text-white rounded hover:bg-[#f72822]'>Book Any</Link>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>
    </Layout>
  )
}

export default Services
