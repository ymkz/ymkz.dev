import React from 'react'
import { useFormState } from 'react-use-form-state'
import { createSnackbar } from '@egoist/snackbar'
import SectionContainer from '~/components/abstracts/section-container'
import SectionTitle from '~/components/elements/section-title'
import ContactField from '~/components/elements/contact-field'
import ContactSubmit from '~/components/elements/contact-submit'

type ContactValues = {
  name: string
  email: string
  message: string
}

function Contact() {
  const [form, { text, email, textarea }] = useFormState<ContactValues>(null, { withIds: true })
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const input: RequestInfo = 'https://usebasin.com/f/81603850904d.json'
    const init: RequestInit = {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(form.values)
    }

    try {
      await fetch(input, init)
      createSnackbar('Thank you for contact!', { position: 'right', timeout: 4000 })
    } catch (error) {
      createSnackbar('An error occurred when sending.', { position: 'right' })
    }

    form.clear()
  }

  return (
    <SectionContainer id="contact">
      <SectionTitle>Contact</SectionTitle>
      <form onSubmit={handleSubmit}>
        <ContactField required placeholder="John Doe" {...text('name')} />
        <ContactField required placeholder="john.doe@example.com" {...email('email')} />
        <ContactField required placeholder="Your message here" rows={8} {...textarea('message')} />
        <ContactSubmit type="submit">Submit</ContactSubmit>
      </form>
    </SectionContainer>
  )
}

export default Contact
