import { render } from '@testing-library/react'
import React from 'react'

import { FlexRow } from '~/components/elements/flex-row'

jest.mock('next/router', () => ({
  useRouter() {
    return { route: '/', pathname: '', query: '', asPath: '' }
  }
}))

describe('components', () => {
  describe('elements', () => {
    describe('flex-row', () => {
      test('<FlexRow /> space=0', () => {
        const rendered = render(
          <FlexRow>
            <div>A</div>
            <div>B</div>
          </FlexRow>
        )
        expect(rendered).toBeDefined()
      })

      test('<FlexRow /> space=16', () => {
        const rendered = render(
          <FlexRow space={16}>
            <div>A</div>
            <div>B</div>
          </FlexRow>
        )
        expect(rendered).toBeDefined()
      })
    })
  })
})
