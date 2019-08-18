import React from 'react'
import styled from '@emotion/styled'

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
  height: 36px;
  padding: 0 8px;
  margin: 0;
  color: var(--base-text);
  background-color: var(--input-background);
  border: 0;
  border-radius: 4px;
  &:focus {
    border: 1px solid var(--input-border);
    outline: none;
    box-shadow: 0 0 0 0.2rem var(--input-shadow);
  }
  &::placeholder {
    color: var(--input-placeholder-text);
    opacity: 0.5;
  }
`

const Textarea = styled.textarea`
  padding: 8px;
  margin: 0;
  color: var(--base-text);
  resize: vertical;
  background-color: var(--input-background);
  border: 0;
  border-radius: 4px;
  &:focus {
    border: 1px solid var(--input-border);
    outline: none;
    box-shadow: 0 0 0 0.2rem var(--input-shadow);
  }
  &::placeholder {
    color: var(--input-placeholder-text);
    opacity: 0.5;
  }
`
