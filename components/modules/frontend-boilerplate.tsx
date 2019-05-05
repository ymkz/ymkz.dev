import React from 'react'
import ProductContainer from 'components/abstracts/product-container'
import ProductTitle from 'components/elements/product-title'
import ProductSubtitle from 'components/elements/product-subtitle'
import ProductDescription from 'components/elements/product-description'
import ProductSupply from 'components/elements/product-supply'
import ProductLink from 'components/elements/product-link'
import Sentence from 'components/elements/sentence'

function Portfolio() {
  return (
    <ProductContainer id="frontend-boilerplate">
      <ProductTitle>frontend-boilerplate</ProductTitle>
      <ProductSubtitle>A boilerplate for frontend development</ProductSubtitle>
      <ProductDescription>
        <Sentence>Frontendのモダンなスタックで構成されたBoilerplateです</Sentence>
        <Sentence>
          既存のBoilerplateを用いずに自分なりのBoilerplateをゼロベースで作成しています。TypeScriptで記述し、ビルドはwebpack、React+Reduxな開発環境です。Reduxはredux-observableを用いて非同期処理まわりをepicにまとめています。
        </Sentence>
      </ProductDescription>
      <ProductSupply>
        <ProductLink href="https://frontend-boilerplate.now.sh">
          Website - frontend-boilerplate
        </ProductLink>
        <ProductLink href="https://github.com/ymkz/frontend-boilerplate">
          Repository - GitHub(ymkz/frontend-boilerplate)
        </ProductLink>
      </ProductSupply>
    </ProductContainer>
  )
}

export default Portfolio
