import React from 'react'
import { css } from '@emotion/core'

type ContactSubmitProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function ContactSubmit({ disabled }: ContactSubmitProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      css={css`
        background-color: var(--button-background);
        border: 0;
        border-radius: 4px;
        color: var(--base-text);
        cursor: pointer;
        margin-top: 1rem;
        padding: 10px 16px;
        &:focus {
          box-shadow: inset 0 1px 2px var(--button-shadow), 0 0 0 4px var(--button-shadow);
          outline: 0;
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
