import React from "react";
import Layout from "./Layout";

const Customerservice = () => {
  return (
    <Layout>
      <div className="bg-white md:w-6/12 shadow-lg border mx-auto pb-8">
        <img src="/img/contact.jpg" className="h-[300px] w-full object-cover" />
        <div className="p-8">
          <form className="space-y-6">
            <div className="flex flex-col">
              <label className="font-semibold text-lg mb-1">Fullname:</label>
              <input
                required
                name="fullname"
                placeholder="Rahul"
                className="p-3 border border-gray-300 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-lg mb-1">Email id:</label>
              <input
                required
                type="email"
                name="email"
                placeholder="rahul@gmail.com"
                className="p-3 border border-gray-300 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-lg mb-1">Mobile no:</label>
              <input
                required
                type="number"
                name="mobileno"
                placeholder="9910*****"
                className="p-3 border border-gray-300 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-lg mb-1">Message:</label>
              <textarea
                required
                name="message"
                placeholder="Enter your message here"
                className="p-3 border border-gray-300 rounded"
                rows={4}
              />
            </div>
            <button className="py-3 px-8 rounded bg-[#d1221d] text-white font-semibold hover:bg-[#f72822]">
              Get Quote
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Customerservice;
