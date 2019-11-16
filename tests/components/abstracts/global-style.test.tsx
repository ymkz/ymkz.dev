import { render } from '@testing-library/react'
import React from 'react'

import { GlobalStyle } from '~/components/abstracts/global-style'

describe('components', () => {
  describe('abstracts', () => {
    describe('grobal', () => {
      test('<GlobalStyle />', () => {
        const rendered = render(<GlobalStyle />)
        expect(rendered).toBeDefined()
      })
    })
  })
})
