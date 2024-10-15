import React from 'react'
import Layout from './Layout'
import Slider from './Slider'
import { Link } from 'react-router-dom'

const Home = () => {

    const hero = [
        {
            image: '/img/hs1.jpg',
            title: 'Sustainability',
            p : 'Sustainable business begins with sustainable supply chains. Find out what we have to offer, why we’re committed to sustainability, and how our industry is helping deliver an even better world.'
        },
        {
            image: '/img/hs2.jpeg',
            title: 'Innovation',
            p : 'Discover the future of logistics through customer-centric innovation, industry-leading trend research and next generation solutions.'
        },
        {
            image: '/img/hs3.jpeg',
            title: 'Global Connectedness Report',
            p : 'The Logistics Global Connectedness Report 2024 reveals that globalization is at a record high – despite the pandemic and geopolitical conflicts.'
        },

    ]
  return (
    <Layout>
      <Slider />
      <div className='w-10/12 m-auto py-8'>
        <div className=' grid grid-cols-2'>
            <div className=" bg-white shadow-xl py-6 flex flex-col justify-center">
                <div className='px-4 space-y-7'>
                    <h1 className='text-4xl font-bold'>Document and Parcel Shipping</h1>
                    <h1 className='text-2xl text-gray-600'>For All Shippers</h1>
                    <p className='text-[16px] text-gray-600 w-[600px]'>Learn about Logistics World – the undisputed global leader in international express shipping.</p>
                </div>
                <div className="bg-[#f2f2f2] p-4 mt-7">
                    <h1 className='text-lg font-bold'>Services Available</h1>
                    <div className="grid grid-cols-2 mt-7 gap-3">
                        <div className="flex gap-3 items-center mt-3">
                            <i className="ri-flight-takeoff-line text-white px-2 py-1 bg-[#d1221d]"></i>
                            <h1>Next Possible Business Day</h1>
                        </div>

                        <div className="flex gap-3 items-center mt-3">
                            <i className="ri-briefcase-line text-white px-2 py-1 bg-[#d1221d]"></i>
                            <h1>Tailored Business Solutions</h1>
                        </div>

                        <div className="flex gap-3 items-center mt-3">
                            <i className="ri-map-pin-line text-white px-2 py-1 bg-[#d1221d]"></i>
                            <h1>Flexible Import/Export Options</h1>
                        </div>

                        <div className="flex gap-3 items-center mt-3">
                            <i className="ri-hand-coin-fill text-white px-2 py-1 bg-[#d1221d]"></i>
                            <h1>Wide Variety of Optional Services</h1>
                        </div>

                    </div>
                </div>
                <div className='px-4'>
                    <Link to={'#'} className='block mt-7 w-full bg-[#d1221d] text-center text-white font-semibold py-3 hover:bg-[#f72822]'
                        style={{
                            transition:'0.3s'
                        }}    
                    >
                        Explore Logistics World
                    </Link>
                </div>
            </div>
            <div className="h-[700px] overflow-hidden shadow-xl">
                <img src="/img/h2.jpeg" alt="" className='object-cover h-full' />
            </div>


            <div className="h-[700px] overflow-hidden mt-16 shadow-xl">
                <img src="/img/h1.jpeg" alt="" className='object-cover h-full' />
            </div>
            <div className=" bg-white shadow-xl py-6 flex flex-col justify-center mt-16">
                <div className='px-4 space-y-7'>
                    <h1 className='text-4xl font-bold'>Cargo Shipping</h1>
                    <h1 className='text-2xl text-gray-600'>Business Only</h1>
                    <p className='text-[16px] text-gray-600 w-[600px]'>Discover shipping and logistics service options from Logistics Global Forwarding.</p>
                </div>
                <div className="bg-[#f2f2f2] p-4 mt-7">
                    <h1 className='text-lg font-bold'>Services Available</h1>
                    <div className="grid grid-cols-2 mt-7 gap-3">
                        <div className="flex gap-3 items-center mt-3">
                            <i className="ri-flight-takeoff-line text-white px-2 py-1 bg-[#d1221d]"></i>
                            <h1>Air Freight</h1>
                        </div>

                        <div className="flex gap-3 items-center mt-3">
                            <i className="ri-ship-line text-white px-2 py-1 bg-[#d1221d]"></i>
                            <h1>Ocean Freight</h1>
                        </div>

                        <div className="flex gap-3 items-center mt-3">
                            <i className="ri-truck-line text-white px-2 py-1 bg-[#d1221d]"></i>
                            <h1>Road Freight</h1>
                        </div>

                        <div className="flex gap-3 items-center mt-3">
                            <i className="ri-train-line text-white px-2 py-1 bg-[#d1221d]"></i>
                            <h1>Rail Freight</h1>
                        </div>

                    </div>
                </div>
                <div className='px-4'>
                    <Link to={'#'} className='block mt-7 w-full bg-[#d1221d] text-center text-white font-semibold py-3 hover:bg-[#f72822]'
                        style={{
                            transition:'0.3s'
                        }}    
                    >
                        Explore Logistics World
                    </Link>
                </div>
            </div>
            
            <div className=" bg-white shadow-xl py-6 flex flex-col justify-center mt-16">
                <div className='px-4 space-y-7'>
                    <h1 className='text-4xl font-bold'>Enterprise Logistics Services</h1>
                    <h1 className='text-2xl text-gray-600'>Business Only</h1>
                    <p className='text-[16px] text-gray-600 w-[600px]'>Find out how Logistics Supply Chain can revolutionize your business as a 3PL provider.</p>
                </div>
                <div className="bg-[#f2f2f2] p-4 mt-7">
                    <h1 className='text-lg font-bold'>Services Available</h1>
                    <div className="grid grid-cols-2 mt-7 gap-3">
                        <div className="flex gap-3 items-center mt-3">
                            <i className="ri-flight-takeoff-line text-white px-2 py-1 bg-[#d1221d]"></i>
                            <h1>Air Freight</h1>
                        </div>

                        <div className="flex gap-3 items-center mt-3">
                            <i className="ri-ship-line text-white px-2 py-1 bg-[#d1221d]"></i>
                            <h1>Ocean Freight</h1>
                        </div>

                        <div className="flex gap-3 items-center mt-3">
                            <i className="ri-truck-line text-white px-2 py-1 bg-[#d1221d]"></i>
                            <h1>Road Freight</h1>
                        </div>

                        <div className="flex gap-3 items-center mt-3">
                            <i className="ri-train-line text-white px-2 py-1 bg-[#d1221d]"></i>
                            <h1>Rail Freight</h1>
                        </div>

                    </div>
                </div>
                <div className='px-4'>
                    <Link to={'#'} className='block mt-7 w-full bg-[#d1221d] text-center text-white font-semibold py-3 hover:bg-[#f72822]'
                        style={{
                            transition:'0.3s'
                        }}    
                    >
                        Explore Logistics World
                    </Link>
                </div>
            </div>
            <div className="h-[700px] overflow-hidden mt-16 shadow-xl">
                <img src="/img/h3.jpeg" alt="" className='object-cover h-full' />
            </div>
            </div>
            <div className="grid grid-cols-3 m-auto gap-x-16 mt-16">
                {
                    hero.map((item, index) => (
                        <div key={index} className='bg-white shadow-lg rounded-lg'>
                            <img src={item.image} alt="" className='w-full h-[217px] object-cover' />
                            <div className=" space-y-3 p-3 overflow-hidden">
                                <h1 className='font-bold'>{item.title}</h1>
                                <p className=' text-gray-600'>{item.p}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </Layout>
  )
}

export default Home
