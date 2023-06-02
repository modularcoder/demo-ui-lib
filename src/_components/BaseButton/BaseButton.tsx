import React from 'react'

export type BaseButtonProps = {
  disabled?: boolean,
  children: React.ReactNode
}

const BaseButton: React.FC<BaseButtonProps> = ({ children }) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default BaseButton
