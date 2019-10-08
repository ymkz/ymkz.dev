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
import toodoo1 from '~/images/toodoo-1.jpg?resize'

export const Toodoo = () => {
  return (
    <SectionContainer id="toodoo">
      <SectionTitle>toodoo</SectionTitle>
      <ProductDescription>A dead simple todo application with service-worker</ProductDescription>
      <ProductStory>
        <Sentence>
          自分なりのTODOアプリをいろんな技術を使って作ろうと思いこのアプリを開発しました。
        </Sentence>
        <Sentence>
          ServiceWorkerを用いたオフライン対応を行いオフラインでも動作するようにしたり、PWAに対応させネイティブのアプリのように見えるように作りました。またシンプルなデザインを意識し、左右へのスワイプというミニマルなユーザージェスチャで操作を可能にするように実装しました。
        </Sentence>
      </ProductStory>
      <ProductSupply>
        <ProductLink href="https://toodoo.now.sh">Website - toodoo.now.sh</ProductLink>
        <ProductLink href="https://github.com/ymkz/toodoo">
          Repository - GitHub(ymkz/toodoo)
        </ProductLink>
      </ProductSupply>
      <FlexRow space={16}>
        <ProductImage {...toodoo1} />
      </FlexRow>
    </SectionContainer>
  )
}
