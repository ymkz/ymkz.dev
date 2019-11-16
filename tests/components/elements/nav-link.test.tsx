import { render } from '@testing-library/react'
import React from 'react'

import { NavLink } from '~/components/elements/nav-link'

jest.mock('next/router', () => ({
  useRouter() {
    return { route: '/', pathname: '', query: '', asPath: '' }
  }
}))

describe('components', () => {
  describe('elements', () => {
    describe('nav-link', () => {
      test('<NavLink />', () => {
        const rendered = render(<NavLink href="/">ymkz</NavLink>)
        expect(rendered).toBeDefined()
        expect(rendered.queryByText('ymkz')).toHaveStyleRule('font-weight', '900')
        expect(rendered.queryByText('ymkz')).toHaveStyleRule('pointer-events', 'auto')
      })
    })
  })
})
