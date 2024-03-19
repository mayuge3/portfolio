import React from 'react'
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  ChevronDoubleRightIcon,
  ChatIcon,
} from './icons'

export type IconProps = {
  icon: 'twitter' | 'facebook' | 'instagram' | 'chevronDoubleRight' | 'chat'
  className?: string
}

type IconNames = Exclude<IconProps['icon'], undefined>

type IconMap = {
  [key in IconNames]: React.FC
}

type IconComponentProps = {
  className?: string
}

const iconMap: IconMap = {
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  chevronDoubleRight: ChevronDoubleRightIcon,
  chat: ChatIcon,
}

export default function Icon({ icon, className = 'w-9 h-9' }: IconProps) {
  const IconComponent: React.FC<IconComponentProps> = iconMap[icon]
  return <IconComponent className={className} />
}
