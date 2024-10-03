import { HeartIcon } from '@heroicons/react/24/outline'

export interface PopularMovieProps {
  title: string
  overview: string
  posterPath: string
  releaseDate: string
}

const PopularMovie = ({
  posterPath,
  title,
  releaseDate,
}: PopularMovieProps) => {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden rounded-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="mx-auto object-cover"
      />
      <div className="bg-gray-700 p-4">
        <h1 className="mt-2 text-xl font-bold text-teal-200">{title}</h1>
        <h3 className="mt-1 text-sm  text-gray-400">{releaseDate}</h3>
      </div>

      <div className="absolute bottom-4 right-4">
        <button onClick={() => console.log(`fav ${title}`)}>
          <HeartIcon className="h-12 w-12 text-gray-600 hover:text-gray-400" />
        </button>
      </div>
    </div>
  )
}

export default PopularMovie
