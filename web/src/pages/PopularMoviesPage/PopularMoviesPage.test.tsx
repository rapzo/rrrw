import { render } from '@redwoodjs/testing/web'

import PopularMoviesPage from './PopularMoviesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PopularMoviesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PopularMoviesPage />)
    }).not.toThrow()
  })
})
