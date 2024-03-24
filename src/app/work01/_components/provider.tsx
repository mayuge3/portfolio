'use client'

import { Provider } from 'jotai'

type providers = {
  children: React.ReactNode
}

export default function Providers({ children }: providers) {
  return <Provider>{children}</Provider>
}
