import React from "react";
import Layout from "./Layout";

const Profile = () => {
  return (
    <Layout>
      <div className="w-10/12 m-auto py-8">
        <div className="bg-white rounded shadow-lg p-8 border">
          <div className="flex gap-3">
            <i className="ri-user-line text-gray-600 text-3xl font-bold"></i>
            <h1 className='text-gray-600 text-3xl font-bold'>Profile</h1>
          </div>
          <div className="h-[1px] mt-3 bg-[#d1221d]" />
          <img src="/img/avtar.png" alt="" className="w-14 h-14 bg-gray-600 rounded-full mb-3 mt-3"/>
          <form className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
              <label className="font-semibold text-lg mb-1">Fullname:</label>
              <input
                required
                name="fullname"
                placeholder="Rahul"
                className="p-3 border mt-3 border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-lg mb-1">Email:</label>
              <input
                required
                name="email"
                placeholder="rahul@gmail.com"
                className="mt-3 p-3 border border-gray-300 rounded"
              />
            </div>
            <button className='px-4 py-2 bg-[#d1221d] text-white rounded w-fit hover:bg-[#f72822]'>
                <i className="ri-save-line mr-3"></i>
              Save
            </button>
          </form>
        </div>
        <div className="bg-white rounded mt-8 shadow-lg p-8 border">
          <div className='flex gap-3'>
            <i className="ri-link-unlink-m text-gray-600 text-3xl font-bold"></i>
            <h1 className="text-gray-600 text-3xl font-bold">Delivery Address</h1>
          </div>
          <div className="h-[1px] mt-3 bg-[#d1221d] mb-3" />
          <form className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2 col-span-2'>
            <label className='font-semibold text-lg'>Area/Street/Vill:</label>
            <input
              required
              name="address"
              type="text"
             className="p-3 border mt-3 border-gray-300 rounded"
            />
            </div>
            
            <div className='flex flex-col gap-2'>
            <label className='font-semibold text-lg'>City:</label>
            <input
              required
              name="city"
              type="text"
             className="p-3 border mt-3 border-gray-300 rounded"
            />
            </div>

            <div className='flex flex-col gap-2'>
            <label className='font-semibold text-lg'>State:</label>
            <input
              required
              name="state"
              type="text"
             className="p-3 border mt-3 border-gray-300 rounded"
            />
            </div>

            <div className='flex flex-col gap-2'>
            <label className='font-semibold text-lg'>Country:</label>
            <input
              required
              name="country"
              type="text"
             className="p-3 border mt-3 border-gray-300 rounded"
            />
            </div>
            
            <div className='flex flex-col gap-2'>
            <label className='font-semibold text-lg'>Pincode:</label>
            <input
              required
              name="pincode"
              type="number"
             className="p-3 border mt-3 border-gray-300 rounded"
            />
            </div>
            <div className='flex flex-col gap-2'>
            <label className='font-semibold text-lg'>Mobile:</label>
            <input
              required
              name="mobile"
              type="number"
             className="p-3 border mt-3 border-gray-300 rounded"
            />
            </div>
            <div className='col-span-2'>
              <button className='px-4 py-2 bg-[#d1221d] text-white rounded w-fit hover:bg-[#f72822]'>
                <i className="ri-save-line mr-2"></i>
                Save
                </button>
                       
                <button className='px-4 py-2 bg-[#d1221d] text-white rounded w-fit hover:bg-[#f72822]'>
                <i className="ri-save-line mr-2"></i>
                Submit
                </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
