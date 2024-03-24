import type { Metadata } from 'next'
import type { OverwriteMetadataProps } from '@/lib/overwrite-metadata'
import { OverwriteMetadata } from '@/lib/overwrite-metadata'

import Work01SuccessContent from './page-content'

export default function Work01Success() {
  return (
    <>
      <Work01SuccessContent />
    </>
  )
}

// Metadata
const pageMeta: OverwriteMetadataProps = {
  pageTitle: 'VEG - ご注文ありがとうございます',
  pageDesc: '注文手続きが完了しました',
  pagePath: '/work01/success',
}

export const metadata: Metadata = OverwriteMetadata(pageMeta)
