import React from 'react'
import styled from '@emotion/styled'
import { useFormState } from 'react-use-form-state'
import SectionContainer from '../abstracts/section-container'
import SectionTitle from '../elements/section-title'
import SubmitButton from '../elements/submit-button'
import colors from '../../constants/colors'

const Field = styled.div`
  display: flex;
  flex-flow: column;
  padding: 4px 0;
  &:first-of-type {
    padding-top: 0;
  }
  &:last-of-type {
    padding-bottom: 0;
  }
`

const Label = styled.label`
  margin-bottom: 4px;
`

const Input = styled.input`
  background-color: ${colors.nord4};
  border: 0;
  border-radius: 4px;
  color: ${colors.nord0};
  font-size: 1rem;
  margin: 0;
  padding: 8px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.nord3};
    opacity: 0.5;
  }
`

const Textarea = styled.textarea`
  background-color: ${colors.nord4};
  border: 0;
  border-radius: 4px;
  color: ${colors.nord0};
  font-size: 1rem;
  margin: 0;
  padding: 8px;
  resize: vertical;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.nord3};
    opacity: 0.5;
  }
`

function Contact() {
  const [form, input] = useFormState()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <SectionContainer>
      <SectionTitle>Contact</SectionTitle>
      <form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input {...input.text('name')} id="name" placeholder="John Doe" required />
        </Field>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input {...input.text('email')} id="email" placeholder="john.doe@example.com" required />
        </Field>
        <Field>
          <Label htmlFor="message">Message</Label>
          <Textarea
            {...input.textarea('message')}
            id="message"
            placeholder="What you want to tell me"
            rows={8}
            required
          />
        </Field>
        <SubmitButton disabled>Submit</SubmitButton>
      </form>
    </SectionContainer>
  )
}

export default Contact
