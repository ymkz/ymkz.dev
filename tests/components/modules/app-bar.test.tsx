import { render } from '@testing-library/react'
import React from 'react'

import { AppBar } from '~/components/modules/app-bar'

jest.mock('next/router', () => ({
  useRouter() {
    return { route: '/', pathname: '', query: '', asPath: '' }
  }
}))

describe('components', () => {
  describe('modules', () => {
    describe('app-bar', () => {
      test('<AppBar />', () => {
        const rendered = render(<AppBar />)
        expect(rendered).toBeDefined()
      })
    })
  })
})
