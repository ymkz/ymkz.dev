import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Contact } from '~/components/modules/contact'

describe('components', () => {
  describe('modules', () => {
    describe('contact', () => {
      test('<Contact />', () => {
        const rendered = render(<Contact />)
        expect(rendered).toBeDefined()
        expect(rendered.queryByText('Submit')).toHaveAttribute('type')
        fireEvent.click(rendered.getByText('Submit'))
      })
    })
  })
})
