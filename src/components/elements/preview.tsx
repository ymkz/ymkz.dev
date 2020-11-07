type Props = {
  preview: boolean
}

export function Preview({ preview }: Props) {
  const handleClick = () => {
    fetch('/api/clear')
  }

  if (preview) {
    return (
      <button className="preview" onClick={handleClick}>
        PREVIEW MODE
      </button>
    )
  } else {
    return null
  }
}
