import React from 'react'

export type BaseButtonProps = {
  disabled?: boolean,
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const BaseButton: React.FC<BaseButtonProps> = ({
  children, ...props
}) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default BaseButton
