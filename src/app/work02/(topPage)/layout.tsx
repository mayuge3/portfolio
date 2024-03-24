import type { Metadata } from 'next'
import type { OverwriteMetadataProps } from '@/lib/overwrite-metadata'
import { OverwriteMetadata } from '@/lib/overwrite-metadata'
import opengraphImg from '@/work02/_assets/opengraph-image.jpg'

import Header from '@/work02/_components/layout/header'
import Footer from '@/work02/_components/layout/footer'
import DecorationBar from '@/work02/_components/elements/decorationBar'
import LinkToKataKago from '@/katakago/_components/elements/linkToKataKago'

type LayoutProps = {
  children: React.ReactNode
}

export default function Work02ToppageLayout({ children }: LayoutProps) {
  // トップページでは topPage クラスを追加
  return (
    <div
      className={` topPage overflow-hidden font-body text-base text-gray-900`}
    >
      <Header />
      <main className="relative pb-36 topPage:pb-0">
        {children}

        <DecorationBar />
      </main>
      <Footer />

      <LinkToKataKago />
    </div>
  )
}

// Metadata
const pageMeta: OverwriteMetadataProps = {
  pageTitle: 'LIGHT',
  pageDesc: '木のぬくもりとやさしい灯り',
  pagePath: '/work02',
  pageImg: opengraphImg,
}

export const metadata: Metadata = OverwriteMetadata(pageMeta)
