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

export const EditIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'>
    <g
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'>
      <path d='M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1' />
      <path d='M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3' />
    </g>
  </svg>
)

export const DeleteIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'>
    <path
      fill='currentColor'
      d='M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z'
    />
  </svg>
)

export const EyeIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'>
    <path
      fill='currentColor'
      d='M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5'
    />
  </svg>
)

export const Logo = ({ width, height, src = '/LogoPrincipal.png' }: ImageProps) => (
  <Image
    src={src}
    width={width}
    height={height}
    fallbackSrc={`https://placehold.co/${width}x${height}`}
    alt='Imagen del logo principal'
  />
)
