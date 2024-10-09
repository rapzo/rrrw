// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import PopularMoviesCell from 'src/components/PopularMoviesCell'

const PopularMoviesPage = () => {
  return (
    <>
      <Metadata title="PopularMovies" description="PopularMovies page" />

      <div className="bg-gray-900 p-8">
        <PopularMoviesCell />
      </div>
    </>
  )
}

export default PopularMoviesPage
