import NextImage from 'next/image'
import { ContentShape } from '~/types'

type Props = Pick<ContentShape, 'eyecatch'>

export function Image({ eyecatch }: Props) {
  if (eyecatch) {
    return (
      <div className="post__eyecatch">
        <NextImage src={eyecatch.url} alt="" height={415} width={715} />
      </div>
    )
  } else {
    return null
  }
}
