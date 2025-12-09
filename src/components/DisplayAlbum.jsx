import React, { useContext } from 'react'
import { Navbar } from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

export const DisplayAlbum = () => {
  const { id } = useParams()
  const albumData = albumsData[id]
  const { playWithId } = useContext(PlayerContext)
  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-end ">
        <img className="w-40 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="font-bold text-5xl md:text-7xl">{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-2 ">
            <img
              className="w-6 mr-2 inline-block "
              src={assets.spotify_logo}
              alt=""
            />
            <b className="mr-1">Spotify</b># 1,263,295 likes # <b>50 songs,</b>
            about 3 hr
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-3 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="w-4 m-auto" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5 rounded" src={item.image} alt="" />
          </p>
          <p className="text-[15px]">{item.name}</p>
          <p className="text-[15px] hidden sm:block">3 week ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  )
}
