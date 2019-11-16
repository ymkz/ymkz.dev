import { render } from '@testing-library/react'
import React from 'react'

import Index from '~/pages/index'

describe('pages', () => {
  describe('index', () => {
    test('<Index />', () => {
      const rendered = render(<Index />)
      expect(rendered).toBeDefined()
    })
  })
})
