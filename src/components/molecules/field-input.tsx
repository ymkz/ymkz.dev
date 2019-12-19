import styled from '@emotion/styled'
import React from 'react'

import { primary } from '~/helpers/colors'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>
type FieldInputProps = InputProps & TextareaProps

export const FieldInput: React.FC<FieldInputProps> = props => {
  return (
    <Container>
      <Label htmlFor={props.id}>{props.name}</Label>
      {props.type ? <Input {...props} /> : <Textarea {...props} />}
    </Container>
  )
}

const Container = styled.div`
  &:not(:first-of-type) {
    margin-top: 24px;
  }
`

const Label = styled.label`
  color: ${primary[900]};
  display: block;
  margin-bottom: 8px;
  text-transform: capitalize;
`

const Input = styled.input`
  background-color: ${primary[50]};
  border: 0;
  border-radius: 4px;
  color: ${primary[900]};
  height: 40px;
  margin: 0;
  padding: 0 8px;
  width: 100%;
  &:focus {
    box-shadow: 0 0 0 3px ${primary[100]};
    outline: none;
  }
  &::placeholder {
    color: ${primary[200]};
    opacity: 0.5;
  }
`

const Textarea = styled.textarea`
  background-color: ${primary[50]};
  border: 0;
  border-radius: 4px;
  color: ${primary[900]};
  margin: 0;
  padding: 8px;
  resize: vertical;
  width: 100%;
  &:focus {
    box-shadow: 0 0 0 3px ${primary[100]};
    outline: none;
  }
  &::placeholder {
    color: ${primary[200]};
    opacity: 0.5;
  }
`
