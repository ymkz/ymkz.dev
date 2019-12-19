import styled from '@emotion/styled'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import React from 'react'

import { up } from '~/helpers/breakpoints'

const variants: Variants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
}

export const PageContainer: React.FC = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Container initial="initial" animate="in" exit="out" variants={variants}>
        {children}
      </Container>
    </AnimatePresence>
  )
}

const Container = styled(motion.main)`
  margin: 0 auto;
  max-width: 672px;
  padding: 32px 16px;
  ${up('mobile')} {
    padding: 48px 16px;
  }
`
