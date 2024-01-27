import { Image } from '@nextui-org/react'
import { HTMLAttributes } from 'react'

interface ImageProps extends HTMLAttributes<HTMLElement> {
  src?: string
  width: number | string
  height: number | string
  className?: string
}

export const DropDownIcon = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='3em'
        height='3em'
        viewBox='0 0 24 24'>
        <path
          fill='currentColor'
          d='m11.565 13.873l-2.677-2.677q-.055-.056-.093-.129t-.037-.157q0-.168.11-.289q.112-.121.294-.121h5.676q.182 0 .293.124q.111.124.111.289q0 .04-.13.283l-2.677 2.677q-.093.092-.2.142q-.107.05-.235.05t-.235-.05q-.107-.05-.2-.142'></path>
      </svg>
    </>
  )
}

export const Logo = ({ width, height, src = '/LogoPrincipal.png' }: ImageProps) => (
  <Image
    src={src}
    width={width}
    height={height}
    fallbackSrc={`https://placehold.co/${width}x${height}`}
    alt='Imagen del logo principal'
  />
)
