import React from 'react'
import styled from '@emotion/styled'
import colors from '../../constants/colors'

const Button = styled.button`
  background-color: ${colors.nord4};
  border: 0;
  border-radius: 4px;
  color: ${colors.nord0};
  margin-top: 1rem;
  padding: 10px 16px;
  &:focus {
    box-shadow: inset 0 1px 2px ${colors.nord5}, 0 0 0 4px ${colors.nord5};
    outline: 0;
  }
  &:disabled {
    color: ${colors.nord3};
    cursor: not-allowed;
    opacity: 0.5;
  }
`

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

function ContactSubmit({ disabled }: Props) {
  return (
    <Button type="submit" disabled={disabled}>
      Submit
    </Button>
  )
}

export default ContactSubmit
