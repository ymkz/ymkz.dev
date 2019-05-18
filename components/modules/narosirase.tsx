import React from 'react'
import Row from '~/components/abstracts/row'
import ProductContainer from '~/components/abstracts/product-container'
import ProductTitle from '~/components/elements/product-title'
import ProductSubtitle from '~/components/elements/product-subtitle'
import ProductDescription from '~/components/elements/product-description'
import ProductSupply from '~/components/elements/product-supply'
import ProductLink from '~/components/elements/product-link'
import ProductImage from '~/components/elements/product-image'
import Sentence from '~/components/elements/sentence'

function Narosirase() {
  return (
    <ProductContainer id="narosirase">
      <ProductTitle>Narosirase</ProductTitle>
      <ProductSubtitle>A web-novel reader for Syosetuka-ni-Narou</ProductSubtitle>
      <ProductDescription>
        <Sentence>
          Narosiraseは『小説家になろう』というWeb小説投稿サイトの小説の更新を追跡するためのアプリです。
        </Sentence>
        <Sentence>
          Swiftでのネイティブ開発を採用せず、React Nativeを採用したのは自分がフロントエンドでReact
          に関する知識を持っていたことも大きいですが、UIを構築して上でCSSライクな記述で組み立てていけるのが一番でした。今のところ、とりあえずの目的のための実装は完了し普段から使えるレベルにはなりましたが、
          これからもよりよいUXを探して機能追加や改修をしていきたいと思っています。
          本家様のテキストダウンロードに関するポリシーの変更に伴い、アプリケーションの公開を停止しています。
        </Sentence>
      </ProductDescription>
      <ProductSupply>
        <ProductLink href="https://github.com/ymkz/narosirase">
          Repository - GitHub(ymkz/narosirase)
        </ProductLink>
      </ProductSupply>
      <Row space={16}>
        <ProductImage image={require('~/static/images/narosirase-1.jpg?resize')} />
        <ProductImage image={require('~/static/images/narosirase-2.jpg?resize')} />
      </Row>
    </ProductContainer>
  )
}

export default Narosirase
