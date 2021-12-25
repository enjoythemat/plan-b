import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navigation = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'Наши работы', path: '/album' },
  { id: 3, title: 'Доставка', path: '/shopping' },
  { id: 4, title: 'О компании', path: '/about' },
  { id: 5, title: 'Контакты', path: '/contacts' }
]

const Navbar = ({ menuIsOpen }) => {
  const { pathname } = useRouter()

  return (
    <div className={styles.wrapper} style={menuIsOpen && {display: 'flex'}}>
      <nav className={styles.nav}>
        <div className={styles.links}>
          {navigation.map(({id, title, path}) => (
            <Link key={id} href={path}>
              <a className={pathname === path ? styles.active : null}>{title}</a>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
