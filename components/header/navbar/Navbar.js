import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../../styles/header/Navbar.module.scss'

const Navbar = ({ navigation }) => {
  const { pathname } = useRouter()

  return (
    <div className={styles.nav}>
      <nav className={styles.wrapper}>
        <div className={styles.links} >
          {navigation.map(({id, title, path}) => (
            <Link key={id} href={path}>
              <a
                className={pathname === path ? styles.active : null}
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
