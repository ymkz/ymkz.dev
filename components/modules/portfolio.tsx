import React from 'react'
import ProductContainer from '../abstracts/product-container'
import ProductTitle from '../elements/product-title'
import ProductSubtitle from '../elements/product-subtitle'
import ProductDescription from '../elements/product-description'
import ProductSupply from '../elements/product-supply'
import ProductLink from '../elements/product-link'
import ProductImage from '../elements/product-image'
import Sentence from '../elements/sentence'

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
          TypeScriptで記述したNext.js/Reactを用いて作成し、now.shにデプロイしています。serverlessモードでビルドしており、Now
          Lambdas上のEdge-cacheからserver-side-renderingしています。
        </Sentence>
      </ProductDescription>
      <ProductSupply>
        <ProductLink href="https://ymkz.now.sh">Website - ymkz.now.sh</ProductLink>
        <ProductLink href="https://github.com/ymkz/ymkz.now.sh">
          Repository - GitHub(ymkz/ymkz.now.sh)
        </ProductLink>
      </ProductSupply>
      <ProductImage
        height={256}
        src={require('../../static/images/portfolio_1.jpg?webp')}
        onError={e => (e.currentTarget.src = '/static/images/portfolio_1.jpg')}
      />
    </ProductContainer>
  )
}

export default Portfolio
