import { FC } from 'react'

export const Section: FC = ({ children }) => {
  return (
    <section className="root">
      {children}
      <style jsx>{`
        .root {
          margin-top: 48px;
        }
      `}</style>
    </section>
  )
}
