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

function Cancelectures() {
  return (
    <ProductContainer id="cancelectures">
      <ProductTitle>Cancelectures</ProductTitle>
      <ProductSubtitle>A canceled lectures list viewer for Shimane University</ProductSubtitle>
      <ProductDescription>
        <Sentence>
          Cancelecturesは島根大学の休講情報を手軽に確認するためのアプリケーションです。
        </Sentence>
        <Sentence>
          休講情報は大学のサイトから見ることができますが、深いネストをたどる必要があり、またデザインもただの表というものだったので、ワンクリックで確認できるようになれば便利なのにという思いからGoogle
          Chromeの拡張機能として開発されました。
          その後ReactNativeというものに出会い、よりモダンな実装でスマートフォンのアプリという形で実装してみたいと思い、
          React Nativeを用いたアプリ版Cancelecturesを開発しました。
        </Sentence>
      </ProductDescription>
      <ProductSupply>
        <ProductLink href="https://github.com/ymkz/cancelectures">
          Repository - GitHub(ymkz/cancelectures)
        </ProductLink>
        <ProductLink href="https://chrome.google.com/webstore/detail/cancelectures/klfpecdgfnpijehpdelicgmojhbnmnim">
          Chrome Web Store - Cancelectures
        </ProductLink>
        <ProductLink href="https://github.com/ymkz/cancelectures_native">
          Repository - GitHub(ymkz/cancelectures_native)
        </ProductLink>
        <ProductLink href="https://expo.io/@ymkz/cancelectures">
          Expo - @ymkz/cancelectures
        </ProductLink>
      </ProductSupply>
      <Row space={16}>
        <ProductImage image={require('~/static/images/cancelectures-native-1.jpg?resize')} />
        <ProductImage image={require('~/static/images/cancelectures-native-2.jpg?resize')} />
      </Row>
    </ProductContainer>
  )
}

export default Cancelectures
