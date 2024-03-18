import Header from '@/work02/_components/layout/header'
import Footer from '@/work02/_components/layout/footer'
import DecorationBar from '@/work02/_components/elements/decorationBar'
import LinkToKataKago from '@/katakago/_components/elements/linkToKataKago'

type LayoutProps = {
  children: React.ReactNode
}

export default function Work02SubpageLayout({ children }: LayoutProps) {
  return (
    <div className={` overflow-hidden font-body text-base text-gray-900`}>
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
