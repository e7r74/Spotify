import React from 'react'
import { Navbar } from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import { AlbumItem } from './AlbumItem'
import { SongsItem } from './SongsItem'
export const DisplayHome = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-4">
        <h1 className="font-bold text-2xl my-3"> Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
        <h1 className="font-bold text-2xl my-3"> Today`s biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongsItem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
