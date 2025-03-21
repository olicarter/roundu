import { ReactNode } from 'react'
import styles from './nav-bar.module.css'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { LucideIcon } from 'lucide-react'

/**
 * Mobile tab bar component that sits at the bottom of the screen.
 */
export function Root(props: { children: ReactNode }) {
  return <div className={styles.root} {...props} />
}

interface LinkProps extends Omit<NextLinkProps, 'children'> {
  icon: LucideIcon
  text: string
}

export function Link({ icon: Icon, text, ...props }: LinkProps) {
  return (
    <NextLink className={styles.tab} {...props}>
      <Icon className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </NextLink>
  )
}
