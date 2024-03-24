import type { Metadata } from 'next'
import { siteMeta } from '@/lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType } = siteMeta

// 汎用 OGP 画像
import siteImg from '@/assets/opengraph-image.png'

// 基本のメタデータ
export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: './',
  },
  title: {
    template: `%s | ${siteTitle}`,
    default: siteTitle,
  },
  description: siteDesc,
}

// OpenGraph
type OpenGraph = NonNullable<Metadata['openGraph']>

export const sharedOpenGraphMetadata: OpenGraph = {
  title: siteTitle,
  description: siteDesc,
  url: siteUrl,
  siteName: siteTitle,
  images: [
    {
      url: siteImg.src,
      width: siteImg.width,
      height: siteImg.height,
    },
  ],
  locale: siteLocale,
  type: siteType,
}

// twitter
type Twitter = NonNullable<Metadata['twitter']>

export const sharedTwitterMetadata: Twitter = {
  card: 'summary_large_image',
  title: siteTitle,
  description: siteDesc,
  images: [siteImg.src],
}
