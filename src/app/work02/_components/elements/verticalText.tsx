type VerticalTextProps = {
  className?: string
}

export default function VerticalText({ className }: VerticalTextProps) {
  return (
    <div className={className}>
      <div className="flex h-9 items-center whitespace-nowrap text-xl sm:h-[72px]">
        Warmth of Wood, Gentle Glow
      </div>
    </div>
  )
}
