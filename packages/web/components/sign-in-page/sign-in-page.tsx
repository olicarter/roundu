'use client'

import { db } from '@/db'
import { z } from 'zod'
import styles from './sign-in-page.module.css'
import { FormEvent, useRef, useState } from 'react'
import { SubmitButton } from '../submit-button'

export default function SignInPage() {
  const [sentEmail, setSentEmail] = useState('')

  if (sentEmail) {
    return <CodeStep sentEmail={sentEmail} />
  }

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const schema = z.object({
      email: z.string().email(),
    })

    const data = schema.parse(Object.fromEntries(formData.entries()))

    setSentEmail(data.email)

    await db.auth.sendMagicCode({
      email: data.email,
    })
  }

  return (
    <main className={styles.main}>
      <form onSubmit={signIn}>
        <input
          className="input large"
          name="email"
          placeholder="Email"
          required
          type="email"
        />
        <SubmitButton pendingText="Signing in..." type="submit">
          Sign in
        </SubmitButton>
      </form>
    </main>
  )
}

function CodeStep({ sentEmail }: { sentEmail: string }) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const schema = z.object({
      code: z.string().length(6),
    })

    const { code } = schema.parse(
      Object.fromEntries(new FormData(event.currentTarget).entries()),
    )

    try {
      await db.auth.signInWithMagicCode({ email: sentEmail, code })
    } catch (error) {
      event.currentTarget.reset()
      // @ts-expect-error this example is from the docs
      alert(error.body?.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter your code</h2>
      <p>
        We sent an email to <strong>{sentEmail}</strong>. Check your email, and
        paste the code you see.
      </p>
      <input
        autoFocus
        name="code"
        placeholder="123456..."
        required
        type="text"
      />
      <SubmitButton pendingText="Verifying code..." type="submit">
        Verify code
      </SubmitButton>
    </form>
  )
}
