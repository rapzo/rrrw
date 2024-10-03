import { render } from '@redwoodjs/testing/web'

import PopularMovie from './PopularMovie'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PopularMovie', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PopularMovie />)
    }).not.toThrow()
  })
})
