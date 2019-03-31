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
          Reactを用いたSPAとして構築され、TypeScriptで開発しています。またCSS in
          JSを用いてスタイルの管理を簡便かつ管理しやすいように意識しています。ホスティングはNetlifyで、PRを作成したらDeploy
          Previewsで確認し、masterにマージすることでデプロイされるという構成です。
        </Sentence>
      </ProductDescription>
      <ProductSupply>
        <ProductLink href="https://site.ymkz.now.sh">Website - Portfolio</ProductLink>
        <ProductLink href="https://github.com/ymkz/site.ymkz.now.sh">
          Repository - GitHub(ymkz/site.ymkz.now.sh)
        </ProductLink>
      </ProductSupply>
      <ProductImage src="/static/images/portfolio_1.jpg" height={256} />
    </ProductContainer>
  )
}

export default Portfolio
