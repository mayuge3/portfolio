'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

// リンクデータ
const links = [
  { title: 'Home', href: '/work02', subtitle: 'ホーム' },
  {
    title: 'Products',
    href: '/work02/products',
    subtitle: '暮らしを彩る手作りの照明',
  },
  {
    title: 'About',
    href: '/work02/about',
    subtitle: '照明のデザインから施工まで',
  },
]

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  // ボタンのバーのスタイル
  const bar = 'h-1 w-8 bg-white col-start-1 row-start-1 transition-transform'

  return (
    <nav className={navIsOpen ? `open` : `close`}>
      {/* ボタン */}
      <button
        onClick={toggleNav}
        className="absolute right-0 top-0 z-50 grid h-[72px] w-[72px] place-items-center bg-primary hover:brightness-125"
        aria-label={navIsOpen ? `メニューを閉じる` : `メニューを開く`}
        aria-expanded={navIsOpen}
      >
        <div className={`${bar} open:-rotate-45 close:-translate-y-1.5`}></div>
        <div className={`${bar} open:rotate-45 close:translate-y-1.5`}></div>
      </button>

      {/* オーバーレイメニュー */}
      <motion.div
        className="absolute left-0 top-0 z-40 grid h-[100lvh] w-full origin-top-right place-items-center bg-gray-900/90 text-white "
        // label="Options"
        initial={{ scaleX: 0 }}
        animate={navIsOpen ? 'open' : 'closed'}
        variants={{
          closed: { scaleX: 0 },
          open: {
            scaleX: 1,
            transition: {
              duration: 0.3,
              delayChildren: 0.4,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <ul className="flex flex-col gap-[1.5em] font-josefin text-4xl sm:text-5xl">
          {links.map(({ title, href, subtitle }) => (
            <motion.li
              key={href}
              transition={{ opacity: { duration: 0.4 } }}
              variants={{
                closed: { opacity: 0, x: -40 },
                open: { opacity: 1, x: 0 },
              }}
            >
              <NavLink
                title={title}
                subtitle={subtitle}
                href={href}
                closeNav={closeNav}
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {navIsOpen && (
        <style jsx global>{`
          body {
            overflow: hidden;
            position: absolute;
            inset: 0;
            width: 100%;
          }
        `}</style>
      )}
    </nav>
  )
}

// メニューのリンク部分
type NavLinkProps = {
  title: string
  subtitle: string
  href: string
  closeNav: () => void
}

function NavLink({ title, subtitle, href, closeNav }: NavLinkProps) {
  return (
    <motion.div initial="offHover" whileHover="onHover">
      <Link
        href={href}
        onClick={closeNav}
        className="relative flex items-baseline gap-[0.75em]"
      >
        {title}
        <span className="text-[0.35em] text-gray-300">{subtitle}</span>
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 w-full bg-current"
          style={{ originX: 0 }}
          variants={{
            offHover: {
              scaleX: 0,
              scaleY: 1,
            },
            onHover: {
              scaleX: 1,
              scaleY: 1,
              transition: {
                duration: 0.5,
                easings: ['easeInOut'],
              },
            },
          }}
        ></motion.div>
      </Link>
    </motion.div>
  )
}
