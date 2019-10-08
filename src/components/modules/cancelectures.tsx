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
import cancelecturesNative1 from '~/images/cancelectures-native-1.jpg?resize'
import cancelecturesNative2 from '~/images/cancelectures-native-2.jpg?resize'

export const Cancelectures = () => {
  return (
    <SectionContainer id="cancelectures">
      <SectionTitle>Cancelectures</SectionTitle>
      <ProductDescription>
        A canceled lectures list viewer for Shimane University
      </ProductDescription>
      <ProductStory>
        <Sentence>
          Cancelecturesは島根大学の休講情報を手軽に確認するためのアプリケーションです。
        </Sentence>
        <Sentence>
          休講情報は大学のサイトから見ることができますが、深いネストをたどる必要があり、またデザインもただの表というものだったので、ワンクリックで確認できるようになれば便利なのにという思いからGoogle
          Chromeの拡張機能として開発されました。
          その後ReactNativeというものに出会い、よりモダンな実装でスマートフォンのアプリという形で実装してみたいと思い、
          React Nativeを用いたアプリ版Cancelecturesを開発しました。
        </Sentence>
      </ProductStory>
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
      <FlexRow space={16}>
        <ProductImage {...cancelecturesNative1} />
        <ProductImage {...cancelecturesNative2} />
      </FlexRow>
    </SectionContainer>
  )
}
