import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="w-full flex items-center justify-between font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(+1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="px-3 py-1 bg-white rounded-full text-black text-[15px] hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="px-3 py-1 bg-black rounded-full text-white text-[15px] hidden md:block cursor-pointer">
            Install App
          </p>
          <p className="w-8 h-8 bg-green-800 text-white rounded-full flex items-center justify-center">
            J
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-full cursor-pointer">
          All
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-full cursor-pointer">
          Music
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-full cursor-pointer">
          Podcasts
        </p>
      </div>
    </>
  )
}
