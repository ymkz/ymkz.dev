import React from 'react'
import { FormikProvider, useFormik } from 'formik'
import SectionContainer from '../abstracts/section-container'
import SectionTitle from '../elements/section-title'
import ContactField from '../elements/contact-field'
import ContactSubmit from '../elements/contact-submit'

type Values = {
  name: string
  email: string
  message: string
}

function Contact() {
  const formik = useFormik<Values>({
    initialValues: { name: '', email: '', message: '' },
    onSubmit: async (values, helpers) => {
      const endpoint = 'https://usebasin.com/f/81603850904d.json'
      const request = {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      }
      await fetch(endpoint, request)
      helpers.setSubmitting(false)
      helpers.resetForm()
    }
  })

  return (
    <SectionContainer>
      <SectionTitle>Contact</SectionTitle>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <ContactField name="name" type="text" placeholder="John Doe" required={true} />
          <ContactField
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            required={true}
          />
          <ContactField
            name="message"
            type="textarea"
            placeholder="Your message here"
            rows={8}
            required={true}
          />
          <ContactSubmit disabled={formik.isSubmitting || !formik.isValid} />
        </form>
      </FormikProvider>
    </SectionContainer>
  )
}

export default Contact
