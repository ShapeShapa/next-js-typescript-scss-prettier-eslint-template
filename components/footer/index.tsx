import Link from 'next/link'
import styles from './main.module.scss'

interface social {
  title: string
  link: string
}

const Footer = (props: { socials: social[] }): JSX.Element => {
  const { socials }: { socials: social[] } = props

  return (
    <div className={styles.footer}>
      <ul>
        {socials.map((el: social) => (
          <li key={el.title}>
            <Link href={el.link}>
              <a>{el.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
