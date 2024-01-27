import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode | ReactNode[]
  isRounded?: boolean
}

export const Card = ({ children, isRounded, className }: CardProps) => {
  return <div className={twMerge('w-full h-full p-10 bg-white', isRounded && 'rounded-xl', className)}>{children}</div>
}
