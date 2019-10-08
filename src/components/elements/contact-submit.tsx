import { css } from '@emotion/core'
import React from 'react'

type ContactSubmitProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const ContactSubmit: React.FC<ContactSubmitProps> = ({ disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      css={css`
        padding: 10px 20px;
        color: var(--base-text);
        cursor: pointer;
        background-color: var(--button-background);
        border: 0;
        border-radius: 4px;
        &:focus {
          outline: 0;
          box-shadow: inset 0 1px 2px var(--button-shadow), 0 0 0 4px var(--button-shadow);
        }
        &:disabled {
          color: var(--button-disable-text);
          cursor: not-allowed;
          opacity: 0.5;
        }
      `}
    >
      Submit
    </button>
  )
}
