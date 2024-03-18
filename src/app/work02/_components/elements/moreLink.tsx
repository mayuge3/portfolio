'use client'

import Link from 'next/link'
import { Icon } from '@/work02/_components/elements/icon'
import { motion } from 'framer-motion'

type MoreLinkProps = {
  href: string
  children: React.ReactNode
}

export default function MoreLink({ href = '#', children }: MoreLinkProps) {
  return (
    <motion.div initial="offHover" whileHover="onHover" className="w-fit">
      <Link
        href={href}
        className="relative mt-10 inline-flex items-center gap-3 font-bold text-primaryDark no-underline
						 hover:brightness-125 darkSection:text-primary"
      >
        {children}
        <Icon
          icon="chevronDoubleRight"
          className="aspect-square w-[1em] pb-[0.08em]"
        />
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
