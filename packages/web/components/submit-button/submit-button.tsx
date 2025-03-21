'use client'

import { ComponentPropsWithoutRef } from 'react'
import { useFormStatus } from 'react-dom'

export interface SubmitButtonProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'disabled'> {
  pendingText?: string
}

export function SubmitButton({
  children,
  pendingText,
  ...props
}: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button {...props} className="button large" disabled={pending}>
      {pending ? pendingText : children}
    </button>
  )
}
