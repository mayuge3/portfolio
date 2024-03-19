import { Icon } from '@/work02/_components/elements/icon'

type ChatProps = {
  className: React.ReactNode
  id: string
}

export default function Chat({ className, id = 'false' }: ChatProps) {
  return (
    <button
      className={`${className} w-24 text-primary hover:brightness-125 md:w-28`}
      id={id}
    >
      <Icon icon="chat" />
      <div className="mt-2 font-josefin text-sm font-bold md:text-base">
        Chat Support
      </div>
    </button>
  )
}
