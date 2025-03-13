import { resend } from '@/resend'
import styles from './page.module.css'
import { SubmitButton } from './submit-button'

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.title}>roundu</h1>
        <p>Better the world.</p>
      </header>
      <footer>
        <form action={handleSubmit}>
          <input
            className="input large"
            name="email"
            placeholder="Email"
            type="email"
          />
          <SubmitButton />
        </form>
      </footer>
    </main>
  )
}

async function handleSubmit(formData: FormData) {
  'use server'

  const email = formData.get('email')

  if (typeof email !== 'string') return

  await resend.emails.send({
    from: 'Roundu <roundu@updates.roundu.app>',
    to: 'me@olicarter.dev',
    subject: 'New newsletter subscriber',
    react: <p>New newsletter subscriber: {email}</p>,
  })
}
