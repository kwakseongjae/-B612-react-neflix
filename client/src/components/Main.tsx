import { useState, useEffect } from "react";
import axios from "axios";
import requests from "@apis/Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie: any = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      const filteredData = response.data.results.filter(
        (item: any) => item?.backdrop_path !== (null || undefined)
      );
      setMovies(filteredData);
    });
  }, []);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full bg-gradient-to-r from-black">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="text-overflow w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
