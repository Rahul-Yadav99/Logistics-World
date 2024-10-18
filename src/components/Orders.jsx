import {React, useState, useEffect} from 'react'
import Layout from './Layout'
import firebaseAppConfig from "../util/firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { json, useNavigate } from "react-router-dom";
import { getFirestore, addDoc, collection, getDoc, query, where, updateDoc, doc } from 'firebase/firestore'

import Swal from "sweetalert2";

const auth = getAuth(firebaseAppConfig);
const db = getFirestore(firebaseAppConfig);


const Orders = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  // const [order, setOrder] = useState({})
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
        

      } else {
        setSession(null);
        navigate("/");
      }
    });
  }, []);

  return (
    <Layout>
        <div className='w-6/12 m-auto py-8'>
          <div className="bg-white p-8 border border-gray-200 shadow-lg rounded-lg">
            <div className='flex gap-3'>
              <i className="ri-box-3-line text-gray-600 text-3xl font-bold"></i>
              <h1 className="text-3xl font-bold text-gray-700">Orders</h1>
            </div>
            <div className="h-[1px] mt-3 bg-[#d1221d]" />
            <div>
                  <div className="space-y-3 mt-3">
                  <h1 className='text-gray-600 text-xl font-semibold'>Vehicle :<span className='ml-1 text-gray-600'></span></h1>
                  <h1 className='text-gray-600 text-xl font-semibold'>Price :<span className='ml-1 text-gray-600'></span></h1>
                    <button className='py-2 px-4 bg-[#d1221d] hover:bg-[#f72822] rounded text-white'>
                     <i className="ri-delete-bin-6-line"></i>
                      Cancel
                    </button>
                  </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Orders
