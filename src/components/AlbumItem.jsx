import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="p-2 px-4 min-w-[180px] rounded cursor-pointer hover:[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-sm text-slate-50">{desc}</p>
    </div>
  )
}
