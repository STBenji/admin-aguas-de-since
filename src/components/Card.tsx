import { HTMLAttributes, ReactNode, MouseEventHandler } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode | ReactNode[]
  isRounded?: boolean
  onClick?: MouseEventHandler<HTMLElement>
}

const Card = ({ children, isRounded, className, onClick }: CardProps) => {
  return (
    <div
      className={twMerge('w-full h-full p-10 bg-white', isRounded && 'rounded-xl', className)}
      onClick={onClick}>
      {children}
    </div>
  )
}

export default Card
