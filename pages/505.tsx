import Link from 'next/link'
import styles from '../styles/error.module.scss'

export default function FiveOhFive(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>505</h1>
      <Link href="/">
        <a>Return to home</a>
      </Link>
    </div>
  )
}
