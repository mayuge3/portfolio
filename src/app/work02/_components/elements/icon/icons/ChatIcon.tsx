type IconProps = {
  className?: string
}

export default function ChatIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.5 53.5">
      <path
        d="m.5,28.18C.5,18.14,11,10,23.87,10s23.37,8.14,23.37,18.19c0,9-8.32,16.4-19.27,17.91l-.26,6.3-6.93-6.31C9.82,44.58.5,37.14.5,28.18Z"
        fill="#fff"
      />
      <path
        d="m.5,28.18h.5c0-4.84,2.53-9.24,6.67-12.46,4.14-3.22,9.87-5.22,16.2-5.22,6.33,0,12.07,2,16.2,5.22,4.14,3.22,6.67,7.62,6.67,12.47,0,4.34-2,8.31-5.37,11.4-3.36,3.09-8.09,5.28-13.47,6.02l-.41.06-.24,5.65-6.25-5.7-.15-.02c-5.39-.74-10.38-2.95-13.99-6.05-3.62-3.1-5.86-7.07-5.86-11.37h0s-.5,0-.5,0h-.5c0,4.66,2.42,8.89,6.2,12.13,3.78,3.24,8.94,5.51,14.51,6.28l.07-.5-.34.37,7.72,7.04.31-7.38-.5-.02.07.5c5.57-.77,10.48-3.03,14.01-6.27,3.53-3.24,5.69-7.47,5.69-12.13,0-5.21-2.72-9.9-7.05-13.26-4.33-3.37-10.28-5.43-16.82-5.43-6.54,0-12.49,2.07-16.82,5.43C2.72,18.29,0,22.98,0,28.18h0s.5,0,.5,0Z"
        fill="currentColor"
      />
      <path
        d="m94.5,22.09c0-12.2-13.6-22.09-30.37-22.09s-30.37,9.89-30.37,22.09c0,10.91,10.81,19.91,25.05,21.74l-.11,7.58,10.76-7.58c14.22-1.83,25.04-10.83,25.04-21.74Z"
        fill="currentColor"
      />
    </svg>
  )
}
