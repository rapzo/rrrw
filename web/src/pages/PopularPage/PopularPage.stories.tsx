import type { Meta, StoryObj } from '@storybook/react'

import PopularPage from './PopularPage'

const meta: Meta<typeof PopularPage> = {
  component: PopularPage,
}

export default meta

type Story = StoryObj<typeof PopularPage>

export const Primary: Story = {}
