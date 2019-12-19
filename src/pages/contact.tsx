import { NextPage } from 'next'
import NextHead from 'next/head'
import React from 'react'
import { useFormState } from 'react-use-form-state'

import { FieldInput } from '~/components/molecules/field-input'
import { FieldSubmit } from '~/components/molecules/field-submit'
import { PageContainer } from '~/components/templates/page-container'
import { PageTitle } from '~/components/templates/page-title'
import { snackbar } from '~/helpers/snackbar'

type ContactValues = {
  name: string
  email: string
  message: string
}

const Contact: NextPage = () => {
  const [{ values, clear }, { text, email, textarea }] = useFormState<ContactValues>(null, {
    withIds: true,
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (process.env.NODE_ENV === 'production') {
        const body = JSON.stringify(values)
        const headers = { 'Content-Type': 'application/json' }
        const url: RequestInfo = 'https://usebasin.com/f/81603850904d.json'
        const option: RequestInit = { method: 'POST', headers, body }
        await fetch(url, option)
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
    <React.Fragment>
      <NextHead>
        <title>Contact | ymkz.co</title>
      </NextHead>
      <PageContainer>
        <PageTitle>Get in touch</PageTitle>
        <form onSubmit={handleSubmit}>
          <FieldInput required placeholder="John Doe" {...text('name')} />
          <FieldInput required placeholder="john.doe@example.com" {...email('email')} />
          <FieldInput required placeholder="Your message here" rows={8} {...textarea('message')} />
          <FieldSubmit disabled={!Object.values(values).every(Boolean)} />
        </form>
      </PageContainer>
    </React.Fragment>
  )
}

export default Contact
