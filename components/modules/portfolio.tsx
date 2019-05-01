import React from 'react'
import ProductContainer from 'components/abstracts/product-container'
import ProductTitle from 'components/elements/product-title'
import ProductSubtitle from 'components/elements/product-subtitle'
import ProductDescription from 'components/elements/product-description'
import ProductSupply from 'components/elements/product-supply'
import ProductLink from 'components/elements/product-link'
import ProductImage from 'components/elements/product-image'
import Sentence from 'components/elements/sentence'

function Portfolio() {
  return (
    <ProductContainer id="portfolio">
      <ProductTitle>Portfolio</ProductTitle>
      <ProductSubtitle>The portfolio site about ymkz</ProductSubtitle>
      <ProductDescription>
        <Sentence>
          このサイトであるPortfolioは自分についてや作ってきたものをまとめるために作成しました。
        </Sentence>
        <Sentence>
          TypeScriptで記述したNext.js/Reactを用いて作成し、now.shにデプロイしています。Serverlessモードでビルドしており、Now
          Lambdas上のEdge-CacheからServer Side Renderingしています。
        </Sentence>
      </ProductDescription>
      <ProductSupply>
        <ProductLink href="https://ymkz.io">Website - ymkz.io</ProductLink>
        <ProductLink href="https://github.com/ymkz/ymkz.io">
          Repository - GitHub(ymkz/ymkz.io)
        </ProductLink>
      </ProductSupply>
      <ProductImage
        height={256}
        src={require('static/images/portfolio_1.jpg?webp')}
        onError={e => (e.currentTarget.src = '/static/images/portfolio_1.jpg')}
      />
    </ProductContainer>
  )
}

export default Portfolio
