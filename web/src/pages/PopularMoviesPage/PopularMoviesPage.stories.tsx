import type { Meta, StoryObj } from '@storybook/react'

import PopularMoviesPage from './PopularMoviesPage'

const meta: Meta<typeof PopularMoviesPage> = {
  component: PopularMoviesPage,
}

export default meta

type Story = StoryObj<typeof PopularMoviesPage>

export const Primary: Story = {}
