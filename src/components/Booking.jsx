import { React, useState } from 'react'
import Layout from './Layout'
import {  useParams } from "react-router-dom";

const Booking = () => {

  

  const [formValue, setFormValue] = useState({
      pickuplocation: '',
      destination: ''
    })

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

  const { id } = useParams();
  const servicesDetail = services.find((prod) => prod.id === parseInt(id));

  const booking = (e) => {
    e.preventDefault()
  }

  const handleOnChange = (e) => {
    const input = e.target
    const name = input.name
    const value = input.value
    setFormValue({
      ...formValue,
      [name]: value
    })
  }
  
  return (
    <Layout>
      <div className='w-6/12 m-auto py-8'>
        <h1 className='text-gray-600 text-3xl font-bold'> Book Your Shipment </h1>
        <div className="h-[1px] mt-3 bg-[#d1221d]" />
        <div className="bg-white mt-3 rounded shadow-lg p-8 grid grid-cols-2 ">
          <img src={servicesDetail.image} alt="" className='h-[237px] object-cover' />
          <div className="">
            <h1 className='text-gray-600 text-xl font-semibold'>Vehicle <span className='ml-1 text-[#d1221d]'>{servicesDetail.title}</span></h1>
            <form onSubmit={booking}>
              <div className='mt-3'>
                <label className='text-gray-600 text-xl font-semibold'>
                  Pickup Location
                </label>
                <i className="ri-stop-circle-line text-[#d1221d] text-lg ml-3"></i>
                <input onChange={handleOnChange} required type="text" name='pickuplocation' className='w-full p-2 mt-3 rounded border' />
              </div>

              <div className='mt-3'>
                <label className='text-gray-600 text-xl font-semibold'>
                  Destination
                </label>
                <i className="ri-map-pin-3-line text-[#d1221d] text-lg ml-3"></i>
                <input onChange={handleOnChange} required type="text" name='destination' className='w-full p-2 mt-3 rounded border' />
              </div>
              <div className='bg-gray-100 flex items-center gap-1 w-fit py-2 px-4 rounded mt-3 '>
                <h1 className='text-base font-semibold'>Price:</h1>
                <h1 className='text-base font-semibold text-gray-600'>₹{servicesDetail.price}</h1>
              </div>
              <button className='block py-2 px-5 bg-[#d1221d] w-fit text-white rounded hover:bg-[#f72822] mt-3'>Book Now</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Booking
