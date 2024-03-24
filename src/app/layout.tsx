import type { Metadata } from 'next'
import {
  sharedMetadata,
  sharedOpenGraphMetadata,
  sharedTwitterMetadata,
} from '@/lib/shared-metadata'

import '@/app/globals.css'
import { noto, code, josefin } from '@/app/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/* フォントのCSS変数： --font-noto、--font-code、--font-josefin を使えるように設定 */}
      <body className={`${noto.variable} ${code.variable} ${josefin.variable}`}>
        {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  ...sharedMetadata,
  openGraph: {
    ...sharedOpenGraphMetadata,
  },
  twitter: {
    ...sharedTwitterMetadata,
  },
}
