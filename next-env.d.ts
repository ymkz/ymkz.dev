/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*?resize'

declare type ContactValues = {
  name: string
  email: string
  message: string
}

declare type OptimizeImage = {
  height: number
  width: number
  images: {
    height: number
    width: number
    path: string
  }[]
  placeholder: string
  src: string
  srcSet: string
}
