import React from 'react'
import styled from '@emotion/styled'
import { useField } from 'formik'
import colors from '../../constants/colors'

type Props = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: string
  }

type ErrorProps = {
  error: boolean
}

const Field = styled.div`
  display: flex;
  flex-flow: column;
  padding: 8px 0;
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
  border: ${({ error }: ErrorProps) => (error ? '1px solid rgba(191, 97, 106, 0.85)' : 0)};
  border-radius: 4px;
  box-shadow: ${({ error }: ErrorProps) => error && '0 0 0 0.2rem rgba(191, 97, 106, 0.25)'};
  color: ${colors.nord0};
  font-size: 1rem;
  margin: 0;
  padding: 8px;
  &:focus {
    border: ${({ error }: ErrorProps) =>
      error ? '1px solid rgba(191, 97, 106, 0.85)' : `1px solid ${colors.nord6}`};
    box-shadow: ${({ error }: ErrorProps) =>
      error ? '0 0 0 0.2rem rgba(191, 97, 106, 0.25)' : `0 0 0 0.2rem ${colors.nord5}`};
    outline: none;
  }
  &::placeholder {
    color: ${colors.nord3};
    opacity: 0.5;
  }
`

const Textarea = styled.textarea`
  background-color: ${colors.nord4};
  border: ${({ error }: ErrorProps) => (error ? '1px solid rgba(191, 97, 106, 0.85)' : 0)};
  border-radius: 4px;
  box-shadow: ${({ error }: ErrorProps) => error && '0 0 0 0.2rem rgba(191, 97, 106, 0.25)'};
  color: ${colors.nord0};
  font-size: 1rem;
  margin: 0;
  padding: 8px;
  resize: vertical;
  &:focus {
    border: ${({ error }: ErrorProps) =>
      error ? '1px solid rgba(191, 97, 106, 0.85)' : `1px solid ${colors.nord6}`};
    box-shadow: ${({ error }: ErrorProps) =>
      error ? '0 0 0 0.2rem rgba(191, 97, 106, 0.25)' : `0 0 0 0.2rem ${colors.nord5}`};
    outline: none;
  }
  &::placeholder {
    color: ${colors.nord3};
    opacity: 0.5;
  }
`

const Error = styled.div`
  color: ${colors.nord11};
  margin-top: 4px;
`

function ContactField(props: Props) {
  const [field, meta] = useField(props.name)
  return (
    <Field>
      <Label htmlFor={props.name}>{props.name}</Label>
      {props.type === 'textarea' ? (
        <Textarea error={!!meta.touch && !!meta.error} {...field} {...props} />
      ) : (
        <Input error={!!meta.touch && !!meta.error} {...field} {...props} />
      )}
      {meta.touch && meta.error && <Error>{meta.error}</Error>}
    </Field>
  )
}

export default ContactField
