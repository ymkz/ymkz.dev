type Props = {
  items: string[]
}

export const ListColumn = ({ items }: Props) => {
  return (
    <ul className="root">
      {items.map((item) => (
        <li key={item} className="item">
          {item}
        </li>
      ))}
      <style jsx>{`
        .root {
          margin-top: 16px;
          padding-left: 20px;
        }
        .item {
          font-family: var(--pretty-font);
          line-height: 1.5;
          font-size: 20px;
          font-weight: 500;
          list-style: disc;
        }
      `}</style>
    </ul>
  )
}
