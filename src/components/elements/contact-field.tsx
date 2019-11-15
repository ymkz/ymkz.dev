import styled from '@emotion/styled'
import React from 'react'

type ContactFieldProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const ContactField: React.FC<ContactFieldProps> = props => {
  return (
    <Container>
      <Label htmlFor={props.id}>{props.name}</Label>
      {props.type ? <Input {...props} /> : <Textarea {...props} />}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
`

const Label = styled.label`
  margin-bottom: 8px;
  text-transform: capitalize;
`

const Input = styled.input`
  background-color: var(--input-background);
  border: 0;
  border-radius: 4px;
  color: var(--base-text);
  height: 36px;
  margin: 0;
  padding: 0 8px;
  &:focus {
    box-shadow: 0 0 0 4px var(--input-shadow);
    outline: none;
  }
  &::placeholder {
    color: var(--input-placeholder-text);
    opacity: 0.5;
  }
`

const Textarea = styled.textarea`
  background-color: var(--input-background);
  border: 0;
  border-radius: 4px;
  color: var(--base-text);
  margin: 0;
  padding: 8px;
  resize: vertical;
  &:focus {
    box-shadow: 0 0 0 4px var(--input-shadow);
    outline: none;
  }
  &::placeholder {
    color: var(--input-placeholder-text);
    opacity: 0.5;
  }
`
