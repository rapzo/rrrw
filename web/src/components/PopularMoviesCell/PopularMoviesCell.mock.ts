// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  popularMovies: [
    {
      __typename: 'PopularMovies' as const,
      id: 42,
    },
    {
      __typename: 'PopularMovies' as const,
      id: 43,
    },
    {
      __typename: 'PopularMovies' as const,
      id: 44,
    },
  ],
})
