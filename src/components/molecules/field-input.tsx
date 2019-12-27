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
  display: block;
  margin-bottom: 8px;
  color: ${primary[900]};
  text-transform: capitalize;
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 0 8px;
  color: ${primary[900]};
  background-color: ${primary[50]};
  border: 0;
  border-radius: 4px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${primary[100]};
  }
  &::placeholder {
    color: ${primary[200]};
    opacity: 0.5;
  }
`

const Textarea = styled.textarea`
  width: 100%;
  margin: 0;
  padding: 8px;
  color: ${primary[900]};
  background-color: ${primary[50]};
  border: 0;
  border-radius: 4px;
  resize: vertical;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${primary[100]};
  }
  &::placeholder {
    color: ${primary[200]};
    opacity: 0.5;
  }
`
