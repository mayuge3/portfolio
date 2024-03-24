import type { StaticImageData } from 'next/image'
import type { Metadata } from 'next'
import {
  sharedOpenGraphMetadata,
  sharedTwitterMetadata,
} from '@/lib/shared-metadata'
import { siteMeta } from '@/lib/constants'
import { metadata } from '@/app/layout'
const { siteTitle, siteUrl } = siteMeta

export type OverwriteMetadataProps = {
  pageTitle: string
  pageDesc: string
  pagePath: string
  pageImg?: StaticImageData
}

export function OverwriteMetadata({
  pageTitle,
  pageDesc,
  pagePath,
  pageImg,
}: OverwriteMetadataProps) {
  // ページごとのデータを元にshared-metadataを上書きするオブジェクトを作成する
  const obj: Metadata = {
    title: pageTitle,
    description: pageDesc,

    openGraph: {
      ...sharedOpenGraphMetadata,
      title: `${pageTitle} | ${siteTitle}`,
      description: pageDesc,
      url: new URL(pagePath, siteUrl).toString(),
    },

    twitter: {
      ...sharedTwitterMetadata,
      title: `${pageTitle} | ${siteTitle}`,
      description: pageDesc,
    },
  }

  // ページの画像がある場合、OpenGraphとTwitterのimagesを追加する
  if (pageImg) {
    if (obj.openGraph) {
      obj.openGraph.images = [
        {
          url: pageImg.src,
          width: pageImg.width,
          height: pageImg.height,
        },
      ]
    }

    if (obj.twitter) {
      obj.twitter.images = [pageImg.src]
    }
  }

  return obj
}
