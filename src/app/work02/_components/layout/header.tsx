import Logo from '@/work02/_components/elements/logo'
import Nav from '@/work02/_components/layout/nav'

export default function Header() {
  return (
    <header>
      <div className="flex justify-between">
        <Logo
          className="mb-14 ml-4 mt-7 sm:mb-16 
						topPage:lg:mb-32 topPage:lg:ml-8 topPage:lg:mt-12"
        />
        <Nav />
      </div>
    </header>
  )
}
