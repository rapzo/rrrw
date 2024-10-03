export const schema = gql`
  type Popular {
    page: Int
    results: [Movie]
    total_pages: Int
    total_results: Int
  }

  type Movie {
    adult: Boolean
    backdrop_path: String
    genre_ids: [Int]
    id: Int
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    release_date: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type Query {
    popularMovies(page: Int): Popular @requireAuth
  }
`
