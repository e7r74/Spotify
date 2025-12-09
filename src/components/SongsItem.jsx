import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

export const SongsItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext)
  return (
    <div
      onClick={() => playWithId(id)}
      className="p-2 px-4 min-w-[180px] rounded cursor-pointer hover:[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-sm text-slate-50">{desc}</p>
    </div>
  )
}
