import styled from '@emotion/styled'
import React from 'react'

import { primary } from '~/helpers/colors'

type FieldSubmitProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const FieldSubmit: React.FC<FieldSubmitProps> = ({ children = 'Submit', ...attrs }) => {
  return (
    <Button type="submit" {...attrs}>
      {children}
    </Button>
  )
}

export const Button = styled.button<FieldSubmitProps>`
  margin-top: 24px;
  padding: 10px 20px;
  color: ${primary[500]};
  background-color: ${primary[50]};
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${primary[100]};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
