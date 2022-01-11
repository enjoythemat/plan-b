import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../../styles/Menu.module.scss'

const Menu = ({ navigation, menuIconHandler }) => {
  const { pathname } = useRouter()

  return (
    <div className={styles.nav}>
        <div className={styles.links} >
          {navigation.map(({id, title, path}) => (
            <Link key={id} href={path}>
              <a
                className={pathname === path ? styles.active : null}
                onClick={() => menuIconHandler('close')}
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Menu
