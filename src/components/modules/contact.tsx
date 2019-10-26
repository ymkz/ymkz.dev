import React from 'react'
import { useFormState } from 'react-use-form-state'

import { SectionContainer } from '~/components/abstracts/section-container'
import { ContactField } from '~/components/elements/contact-field'
import { ContactSubmit } from '~/components/elements/contact-submit'
import { SectionTitle } from '~/components/elements/section-title'
import { snackbar } from '~/helpers/snackbar'

export const Contact = () => {
  const [{ values, clear }, { text, email, textarea }] = useFormState<ContactValues>(null, {
    withIds: true
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const body = JSON.stringify(values)
    const headers = { 'Content-Type': 'application/json' }
    const input: RequestInfo = 'https://usebasin.com/f/81603850904d.json'
    const init: RequestInit = { method: 'POST', headers, body }

    try {
      if (process.env.NODE_ENV === 'production') {
        await fetch(input, init)
      } else {
        console.info(`${process.env.NODE_ENV}:`, values)
      }
      snackbar('Thank you for contact!')
      clear()
    } catch (error) {
      snackbar('An error occurred when sending.', { error: true })
    }
  }

  return (
    <SectionContainer id="contact">
      <SectionTitle>Contact</SectionTitle>
      <form onSubmit={handleSubmit}>
        <ContactField required placeholder="John Doe" {...text('name')} />
        <ContactField required placeholder="john.doe@example.com" {...email('email')} />
        <ContactField required placeholder="Your message here" rows={8} {...textarea('message')} />
        <ContactSubmit type="submit" disabled={!Object.values(values).every(Boolean)} />
      </form>
    </SectionContainer>
  )
}
