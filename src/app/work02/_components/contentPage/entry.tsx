import { StaticImageData } from 'next/image'

import Eyecatch from '@/work02/_components/contentPage/eyecatch'

type EntryProps = {
  title: string
  eyecatch: StaticImageData
  children: React.ReactNode
}

export default function Entry({ title, eyecatch, children }: EntryProps) {
  // コンテンツは@tailwindcss/typography プラグインでスタイリング
  return (
    <article>
      <Eyecatch img={eyecatch} />
      <div className="prose mx-auto mt-20 max-w-[860px] px-5 lg:prose-lg sm:px-20 lg:mt-28">
        <h1>{title}</h1>
        {children}
      </div>
    </article>
  )
}
