import axios from 'axios'

export const popularMovies = async ({ page = 1 }: { page: number }) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`,
        },
      }
    )
    return response.data
  } catch (error) {
    console.error(error)
    return error
  }
}
