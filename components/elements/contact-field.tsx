import React from 'react'
import styled from '@emotion/styled'
import { useField } from 'formik'

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

const Input = styled.input<ErrorProps>`
  background-color: var(--input-background);
  border: ${({ error }) => (error ? '1px solid var(--input-error-border)' : 0)};
  border-radius: 4px;
  box-shadow: ${({ error }) => error && '0 0 0 0.2rem var(--input-error-shadow)'};
  color: var(--base-text);
  height: 36px;
  margin: 0;
  padding: 0 8px;
  &:focus {
    border: ${({ error }) =>
      error ? '1px solid var(--input-error-border)' : '1px solid var(--input-border)'};
    box-shadow: ${({ error }) =>
      error ? '0 0 0 0.2rem var(--input-error-shadow)' : '0 0 0 0.2rem var(--input-shadow)'};
    outline: none;
  }
  &::placeholder {
    color: var(--input-placeholder-text);
    opacity: 0.5;
  }
`

const Textarea = styled.textarea<ErrorProps>`
  background-color: var(--input-background);
  border: ${({ error }) => (error ? '1px solid var(--input-error-border)' : 0)};
  border-radius: 4px;
  box-shadow: ${({ error }) => error && '0 0 0 0.2rem var(--input-error-shadow)'};
  color: var(--base-text);
  margin: 0;
  min-height: 192px;
  padding: 8px;
  resize: vertical;
  &:focus {
    border: ${({ error }) =>
      error ? '1px solid var(--input-error-border)' : '1px solid var(--input-border)'};
    box-shadow: ${({ error }) =>
      error ? '0 0 0 0.2rem var(--input-error-shadow)' : '0 0 0 0.2rem var(--input-shadow)'};
    outline: none;
  }
  &::placeholder {
    color: var(--input-placeholder-text);
    opacity: 0.5;
  }
`

const Error = styled.div`
  color: var(--input-error-text);
  margin-top: 4px;
`

function ContactField(props: Props) {
  const [field, meta] = useField(props.name)
  return (
    <Field>
      <Label htmlFor={props.name}>{props.name}</Label>
      {props.type === 'textarea' ? (
        <Textarea id={props.name} error={!!meta.touched && !!meta.error} {...field} {...props} />
      ) : (
        <Input id={props.name} error={!!meta.touched && !!meta.error} {...field} {...props} />
      )}
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </Field>
  )
}

export default ContactField
