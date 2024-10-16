import React, { useState } from 'react'
import Layout from './Layout'
import { Link, useNavigate } from 'react-router-dom'
import firebaseAppConfig from '../util/firebase-config'
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth'

const auth = getAuth(firebaseAppConfig)

const Signup = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [loader, setLoader] = useState(false)

  const [formValue, setFormValue] = useState({
    fullname: '',
    email: '',
    password: '',
  })

  const signup = async (e) => {
    try {
      e.preventDefault()
      setLoader(true)
      await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
      await updateProfile(auth.currentUser,{displayName: formValue.fullname})
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
    finally{
      setLoader(false)
    }
  }

  const handleOnChange = (e) => {
    const input = e.target
    const name = input.name
    const value = input.value
    setFormValue({
      ...formValue,
      [name]: value
    })
    setError(null)
  }

  return (
    <Layout>
        <div className='w-10/12 m-auto py-8 grid md:grid-cols-2 grid-cols-1'>
          <div className="flex items-center">
            <img src="/img/login.svg" alt="" className='object-cover h-[700px] w-fit  ' />
          </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-3xl font-bold text-[#d1221d]'>New User</h1>
                <p className='text-lg text-gray-600'>Create your account</p>
                <form action="" className='mt-5 space-y-5' onSubmit={signup}>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-lg'>Fullname:</label>
                        <input onChange={handleOnChange} type="text" name="fullname" placeholder='Rahul' required className='p-3 border border-gray-300 rounded'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-lg'>Email:</label>
                        <input onChange={handleOnChange} type="email" name="email" placeholder='rahul@gmail.com' required className='p-3 border border-gray-300 rounded'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-lg'>Password:</label>
                        <input onChange={handleOnChange} type="password" name="password" placeholder='*******' required className='p-3 border border-gray-300 rounded'/>
                    </div>
                    {
                      loader ?
                      <h1 className='text-lg font-semibold text-gray-600'>Loading...</h1>
                      :
                      <button 
                        className='mt-2 bg-[#d1221d] py-2 px-8 rounded-lg w-fit text-white font-semibold hover:bg-[#f72822]' 
                        style={{
                          transition:'0.3s'
                        }}
                      >
                        Signup
                      </button>
                    }
                </form>
                <div className='mt-3'>
                  Already have an account ? <Link to={'/login'} className='text-blue-600'>Signin</Link>
                </div>
                {
                  error && 
                  <div className="mt-3 p-3 bg-red-600 text-white font-semibold">
                    <p>{error}</p>
                </div>
                }
            </div>
        </div>
    </Layout>
  )
}

export default Signup
