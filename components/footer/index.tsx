import { socials } from 'config/socials'
import { social } from 'interfaces/social'
import Link from 'next/link'
import styles from './main.module.scss'

const Footer = (): JSX.Element => (
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

export default Footer
