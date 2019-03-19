import React from 'react'
import styled from '@emotion/styled'
import { useField } from 'formik'
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
  text-transform: capitalize;
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

type Props = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: string
  }

function ContactField(props: Props) {
  const [field, meta] = useField(props.name)
  return (
    <Field>
      <Label htmlFor={props.name}>{props.name}</Label>
      {props.type === 'textarea' ? (
        <Textarea {...field} {...props} />
      ) : (
        <Input {...field} {...props} />
      )}
      {meta.touch && meta.error && <div>error</div>}
    </Field>
  )
}

export default ContactField
