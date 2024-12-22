import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongsItms from "./SongsItms";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((items, index) => (
            <AlbumItem
              key={index}
              name={items.name}
              desc={items.desc}
              id={items.id}
              image={items.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongsItms
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
