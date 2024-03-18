import React from 'react'
import Header from '@/app/work01/_components/layout/header'
import Footer from '@/app/work01/_components/layout/footer'
import LinkToKataKago from '@/katakago/_components/elements/linkToKataKago'
import ShopCartProvider from '@/app/work01/_components/shopCartProvider'

import '@/work01/_styles/work01-global.css'

type Work01LayoutProps = {
  children: React.ReactNode
}

export default function Work01Layout({ children }: Work01LayoutProps) {
  return (
    <>
      <ShopCartProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </ShopCartProvider>

      <LinkToKataKago />

      {fontAwesomeLicense}
    </>
  )
}

// Font Awesome のライセンス情報
const fontAwesomeLicense = (
  <span
    style={{ display: 'none' }}
    dangerouslySetInnerHTML={{
      __html: `<!-- Icons on this page: ! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->`,
    }}
  />
)
