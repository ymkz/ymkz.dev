type Props = {
  items: string[]
}

export const ListRow = ({ items }: Props) => {
  return (
    <ul className="root">
      {items.map((item) => (
        <li key={item} className="item">
          {item}
        </li>
      ))}
      <style jsx>{`
        .root {
          align-items: center;
          flex-flow: row wrap;
          display: flex;
          margin-top: 8px;
        }
        .item {
          font-family: var(--pretty-font);
          height: 32px;
          display: flex;
          align-items: center;
          padding: 0 8px;
          border: 2px solid var(--color-primary);
          margin-top: 8px;
          line-height: 28px;
        }
        .item:not(:last-child) {
          margin-right: 8px;
        }
      `}</style>
    </ul>
  )
}
