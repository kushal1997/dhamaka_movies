import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Backup from "../assets/images/backup.png"
import { useTitle } from "../hooks/useTitle";

export const MovieDetail = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const image = data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : Backup;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=c9ec64406ed342f08f93af4d0ce04628`);
      const json = await response.json();
      setData(json);
    }
    fetchMovie();
  }, [params.id]);

  useTitle(data.title);
  

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={data.title} />
        </div>

        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{data.title}</h1>
          <p className="my-4">{data.overview}</p>
          {data.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {data.genres.map((genre) => (
                <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={genre.id}>{genre.name}</span>
              ))}
            </p>
          ) : ""}

          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="ml-2 text-gray-900 dark:text-white">{data.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" />
            <span
              className=" text-gray-900  dark:text-white">
              {data.vote_count} reviews
            </span>
          </div>

          <p className="my-4 ">
            <span className="mr-2 fold-bold">Release Date: </span>
            <span> {data.release_date} </span>
          </p>

          <p className="my-4 ">
            <span className="mr-2 fold-bold">Runtime: </span>
            <span> {data.runtime} mins </span>
          </p>

          <p className="my-4 ">
            <span className="mr-2 fold-bold">Budget:</span>
            <span> $ {data.budget}</span>
          </p>

          <p className="my-4 ">
            <span className="mr-2 fold-bold">Revenue:</span>
            <span> $ {data.revenue} </span>
          </p>

          <p className="my-4 ">
            <span className="mr-2 fold-bold">IMDB Code:</span>
            <a rel="noreferrer" className="hover:underline" target="_blank" href={`https://www.imdb.com/title/${data.imdb_id}`}>{data.imdb_id}</a>
          </p>

        </div>
      </section>

    </main>
  )
}
