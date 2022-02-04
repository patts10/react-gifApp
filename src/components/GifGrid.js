import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs( category );

  

  return (
    <div className="bg-slate-100 p-5">
      <h3 className="text-lg font-bold text-gray-900 sm:text-3xl sm:truncate mt-3 mb-5 mt-5"> { category } </h3>

      { loading && <p className="animate__animated animate__flash">Loading...</p>}

      <div>
        <ol className="flex flex-wrap justify-around">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </div>
  );
};