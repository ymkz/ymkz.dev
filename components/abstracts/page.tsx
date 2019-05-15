import React from 'react'
import styled from '@emotion/styled'
import { throttle } from 'throttle-debounce'
import Header from 'components/modules/header'

type Props = {
  children: React.ReactNode
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 768px;
  min-height: calc(100vh - 64px);
  padding: 0 16px;
`

const DropShadow = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 6px -3px inset;
  height: 6px;
  left: 0;
  position: sticky;
  top: 64px;
`

function Page({ children }: Props) {
  const [dropShadowVisible, setDropShadowVisible] = React.useState(false)
  const handleScroll = throttle(256, () => {
    if (window.scrollY > 64) {
      setDropShadowVisible(true)
    } else {
      setDropShadowVisible(false)
    }
  })

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <React.Fragment>
      <Header />
      {dropShadowVisible && <DropShadow />}
      <Main>{children}</Main>
    </React.Fragment>
  )
}

export default Page
