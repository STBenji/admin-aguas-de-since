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

export const SearchIcon = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 48 48'>
        <g
          fill='none'
          stroke='currentColor'
          strokeLinejoin='round'
          strokeWidth={4}>
          <path d='M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z'></path>
          <path
            strokeLinecap='round'
            d='M26.657 14.343A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485'></path>
        </g>
      </svg>
    </>
  )
}
