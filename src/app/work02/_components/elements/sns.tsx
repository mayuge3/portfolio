import Link from 'next/link'
import { Icon, IconProps } from '@/work02/_components/elements/icon'

// リンクデータ
type LinkItem = {
  title: string
  href: string
  icon: IconProps['icon']
}

const links: LinkItem[] = [
  { title: 'X (旧Twitter)', href: '#', icon: 'twitter' },
  { title: 'Facebook', href: '#', icon: 'facebook' },
  { title: 'Instagram', href: '#', icon: 'instagram' },
]

type SnsProps = {
  className: string
  linkColor: string
}

export default function Sns({ className, linkColor }: SnsProps) {
  return (
    <div className={className}>
      <ul className="flex w-[72px] flex-col items-center gap-7 ">
        {links.map(({ title, href, icon }) => (
          <li key={icon}>
            <Link href={href} aria-label={title} className={linkColor}>
              <Icon icon={icon} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
