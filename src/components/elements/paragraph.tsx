import { FC } from 'react'

export const Paragraph: FC = ({ children }) => {
  return (
    <p className="root">
      {children}
      <style jsx>{`
        .root {
          font-family: var(--pretty-font);
          font-size: 20px;
          line-height: 1.5;
        }
      `}</style>
    </p>
  )
}
