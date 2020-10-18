import { NextPage, NextPageContext } from 'next'

type Props = {
  statusCode: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <>
      <div className="status-code">{statusCode}</div>
      <style jsx>{`
        .status-code {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%);
          font-family: var(--pretty-font);
          font-size: 96px;
        }
      `}</style>
    </>
  )
}

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404
  return { statusCode }
}

export default Error
