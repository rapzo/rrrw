import { render } from '@redwoodjs/testing/web'

import PopularPage from './PopularPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PopularPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PopularPage />)
    }).not.toThrow()
  })
})
