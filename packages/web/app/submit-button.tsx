'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button className="button large" disabled={pending}>
      {pending ? 'Subscribing...' : 'Keep me updated'}
    </button>
  )
}
