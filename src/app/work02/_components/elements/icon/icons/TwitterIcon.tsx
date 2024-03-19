type IconProps = {
  className?: string
}

export default function TwitterIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 256 256"
      className={className}
    >
      <path
        d="M71.347 66.065l92.449 123.584h20.934L92.282 66.065zm56.51-64.658h0c-69.837 0-126.45 56.613-126.45 126.45h0c0 69.837 56.613 126.45 126.45 126.45h0c69.837 0 126.45-56.613 126.45-126.45h0c0-69.837-56.613-126.45-126.45-126.45zm31 198.116l-42.088-56.276-52.092 56.276h-13.39l59.499-64.276L51.661 56.19h45.57l38.761 51.828 47.972-51.828h13.39l-55.379 59.831 62.452 83.502h-45.57z"
        fill="currentColor"
      />
    </svg>
  )
}
