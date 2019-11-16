import { render } from '@testing-library/react'
import React from 'react'

import Work from '~/pages/work'

describe('pages', () => {
  describe('work', () => {
    test('<Work />', () => {
      const rendered = render(<Work />)
      expect(rendered).toBeDefined()
    })
  })
})
