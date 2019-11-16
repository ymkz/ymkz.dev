import { render } from '@testing-library/react'
import React from 'react'

import About from '~/pages/about'

describe('pages', () => {
  describe('about', () => {
    test('<About />', () => {
      const rendered = render(<About />)
      expect(rendered).toBeDefined()
    })
  })
})
