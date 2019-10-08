import React from 'react'

import { SectionContainer } from '~/components/abstracts/section-container'
import { FlexRow } from '~/components/elements/flex-row'
import { ProductDescription } from '~/components/elements/product-description'
import { ProductImage } from '~/components/elements/product-image'
import { ProductLink } from '~/components/elements/product-link'
import { ProductStory } from '~/components/elements/product-story'
import { ProductSupply } from '~/components/elements/product-supply'
import { SectionTitle } from '~/components/elements/section-title'
import { Sentence } from '~/components/elements/sentence'
import narosirase1 from '~/images/narosirase-1.jpg?resize'
import narosirase2 from '~/images/narosirase-2.jpg?resize'

export const Narosirase = () => {
  return (
    <SectionContainer id="narosirase">
      <SectionTitle>Narosirase</SectionTitle>
      <ProductDescription>A web-novel reader for Syosetuka-ni-Narou</ProductDescription>
      <ProductStory>
        <Sentence>
          Narosiraseは『小説家になろう』というWeb小説投稿サイトの小説の更新を追跡するためのアプリです。
        </Sentence>
        <Sentence>
          Swiftでのネイティブ開発を採用せず、React Nativeを採用したのは自分がフロントエンドでReact
          に関する知識を持っていたことも大きいですが、UIを構築して上でCSSライクな記述で組み立てていけるのが一番でした。今のところ、とりあえずの目的のための実装は完了し普段から使えるレベルにはなりましたが、
          これからもよりよいUXを探して機能追加や改修をしていきたいと思っています。
          本家様のテキストダウンロードに関するポリシーの変更に伴い、アプリケーションの公開を停止しています。
        </Sentence>
      </ProductStory>
      <ProductSupply>
        <ProductLink href="https://github.com/ymkz/narosirase">
          Repository - GitHub(ymkz/narosirase)
        </ProductLink>
      </ProductSupply>
      <FlexRow space={16}>
        <ProductImage {...narosirase1} />
        <ProductImage {...narosirase2} />
      </FlexRow>
    </SectionContainer>
  )
}
