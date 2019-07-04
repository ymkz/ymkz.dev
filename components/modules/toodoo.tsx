import React from 'react'
import { BaseRow } from '~/components/abstracts/base-row'
import { ProductContainer } from '~/components/abstracts/product-container'
import { ProductTitle } from '~/components/elements/product-title'
import { ProductSubtitle } from '~/components/elements/product-subtitle'
import { ProductDescription } from '~/components/elements/product-description'
import { ProductSupply } from '~/components/elements/product-supply'
import { ProductLink } from '~/components/elements/product-link'
import { ProductImage } from '~/components/elements/product-image'
import { Sentence } from '~/components/elements/sentence'

export function Toodoo() {
  return (
    <ProductContainer id="toodoo">
      <ProductTitle>Toodoo</ProductTitle>
      <ProductSubtitle>A dead simple todo application with service-worker</ProductSubtitle>
      <ProductDescription>
        <Sentence>
          自分なりのTODOアプリをいろんな技術を使って作ろうと思いこのアプリを開発しました。
        </Sentence>
        <Sentence>
          ServiceWorkerを用いたオフライン対応を行いオフラインでも動作するようにしたり、PWAに対応させネイティブのアプリのように見えるように作りました。またシンプルなデザインを意識し、左右へのスワイプというミニマルなユーザージェスチャで操作を可能にするように実装しました。
        </Sentence>
      </ProductDescription>
      <ProductSupply>
        <ProductLink href="https://toodoo.now.sh">Website - toodoo.now.sh</ProductLink>
        <ProductLink href="https://github.com/ymkz/toodoo">
          Repository - GitHub(ymkz/toodoo)
        </ProductLink>
      </ProductSupply>
      <BaseRow space={16}>
        <ProductImage image={require('~/static/images/toodoo-1.jpg?resize')} />
      </BaseRow>
    </ProductContainer>
  )
}
