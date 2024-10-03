import { Metadata } from '@redwoodjs/web'

import PopularMoviesCell from 'src/components/PopularMoviesCell'

const PopularPage = () => {
  return (
    <>
      <Metadata title="Popular" description="Popular page" />

      <PopularMoviesCell />
    </>
  )
}

export default PopularPage
