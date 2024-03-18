import localFont from 'next/font/local'
import { Josefin_Sans } from 'next/font/google'

// ローカルフォント Noto Sans JP (subset-min) の設定
// https://github.com/ixkaito/NotoSansJP-subset
//
// katakago、work01 で使用
//
const noto = localFont({
  src: [
    {
      path: '../assets/fonts/NotoSansJP-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/NotoSansJP-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/NotoSansJP-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'block',
  adjustFontFallback: false,
  variable: '--font-noto',
})

// ローカルフォント Cascadia Code (variable) の設定
// https://github.com/microsoft/cascadia-code
//
// katakago で使用
//
const code = localFont({
  src: [
    {
      path: '../assets/fonts/CascadiaCode.woff2',
      weight: '100-700',
      style: 'normal',
    },
  ],
  display: 'block',
  adjustFontFallback: false,
  variable: '--font-code',
})

// Googleフォント Josefin Sans (Google Fonts, variable)
//
// work02 で使用
//
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-josefin',
})

export { noto, code, josefin }
