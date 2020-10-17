import Router from 'next/router'

type Props = {
  preview: boolean
}

export const Preview = ({ preview }: Props) => {
  const handleClick = async () => {
    await fetch('/api/clear')
    Router.replace('/')
  }

  if (preview) {
    return (
      <button className="root" onClick={handleClick}>
        PREVIEW MODE
        <style jsx>{`
          .root {
            position: fixed;
            top: 24px;
            left: 24px;
            cursor: pointer;
            background-color: var(--color-primary);
            color: var(--bg-color-secondary);
            font-size: 14px;
            font-family: var(--pretty-font);
            border: 0;
            height: 28px;
            outline: 0;
          }
        `}</style>
      </button>
    )
  } else {
    return null
  }
}
