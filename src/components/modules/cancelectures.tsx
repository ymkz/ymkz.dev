import React from 'react'
import Row from '../abstracts/row'
import ProductContainer from '../abstracts/product-container'
import ProductTitle from '../elements/product-title'
import ProductSubtitle from '../elements/product-subtitle'
import ProductDescription from '../elements/product-description'
import ProductSupply from '../elements/product-supply'
import ProductLink from '../elements/product-link'
import ProductImage from '../elements/product-image'

function Cancelectures() {
  return (
    <ProductContainer>
      <ProductTitle id="cancelectures">Cancelectures</ProductTitle>
      <ProductSubtitle>A canceled rectures list viewer for Shimane Univ</ProductSubtitle>
      <ProductDescription>
        Cancelecturesは島根大学の休講情報を手軽に確認するためのアプリケーションです。
        <br />
        休講情報は大学のサイトから見ることができますが、深いネストをたどる必要があり、またデザインもただの表というものだったので、ワンクリックで確認できるようになれば便利なのにという思いからGoogle
        Chromeの拡張機能として開発されました。
        その後ReactNativeというものに出会い、よりモダンな実装でスマートフォンのアプリという形で実装してみたいと思い、
        React Nativeを用いたアプリ版Cancelecturesを開発しました。
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
        <ProductImage src="/static/images/cancelectures_native_1.jpg" alt="" width={128} />
        <ProductImage src="/static/images/cancelectures_native_2.jpg" alt="" width={128} />
      </Row>
    </ProductContainer>
  )
}

export default Cancelectures
