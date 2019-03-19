import React from 'react'
import styled from '@emotion/styled'
import colors from '../../constants/colors'

const Button = styled.button`
  background-color: ${colors.nord4};
  border: 0;
  border-radius: 4px;
  color: ${colors.nord0};
  font-size: 1rem;
  margin-top: 1rem;
  padding: 10px 16px;
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
