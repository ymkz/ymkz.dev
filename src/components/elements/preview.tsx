type Props = {
  preview: boolean
}

export function Preview({ preview }: Props) {
  if (preview) {
    return <div>Preview</div>
  } else {
    return null
  }
}
