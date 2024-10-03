import type {
  PopularMoviesQuery,
  PopularMoviesQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import PopularMovie from '../PopularMovie/PopularMovie'

export const QUERY: TypedDocumentNode<
  PopularMoviesQuery,
  PopularMoviesQueryVariables
> = gql`
  query PopularMoviesQuery {
    popularMovies {
      results {
        id
        title
        overview
        poster_path
        release_date
        vote_average
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  popularMovies,
}: CellSuccessProps<PopularMoviesQuery>) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {popularMovies.results.map((item) => {
        return (
          <li
            key={item.id}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <PopularMovie
              overview={item.overview}
              posterPath={item.poster_path}
              releaseDate={item.release_date}
              title={item.title}
            />
          </li>
        )
      })}
    </ul>
  )
}
