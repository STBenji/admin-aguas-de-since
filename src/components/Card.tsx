import { HTMLAttributes, ReactNode, MouseEventHandler } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode | ReactNode[]
  isRounded?: boolean
  onClick?: MouseEventHandler<HTMLElement>
  isLoading?: boolean
}

export const Card = ({ children, isRounded, className, isLoading, onClick }: CardProps) => {
  return isLoading ? (
    <div className={twMerge('w-full h-full p-10 bg-white shadow animate-pulse', isRounded && 'rounded-xl', className)}>{children}</div>
  ) : (
    <div
      className={twMerge('w-full h-full p-10 bg-white shadow', isRounded && 'rounded-xl', className)}
      onClick={onClick}>
      {children}
    </div>
  )
}

export default Card
