import { useState } from 'react'
import Heads from './head/Heads'
import Navbar from './navbar/Navbar'
import Menu from './menu/Menu'

const navigation = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'Галерея работ', path: '/album' },
  { id: 3, title: 'Доставка', path: '/shipping' },
  { id: 4, title: 'О компании', path: '/about' },
  { id: 5, title: 'Контакты', path: '/contacts' }
]

const Header = () => {
  const [menu, setMenu] = useState(false)

  const menuIconHandler = setup => {
    if (setup === 'close') {
      setMenu(false)
    } else {
      setMenu(!menu)
    }
  }

  return (
    <>
      <Heads
        menu={menu}
        menuIconHandler={menuIconHandler}
      />
      <Navbar
        navigation={navigation}
      />
      {menu
        ? <Menu
            menuIconHandler={menuIconHandler}
            navigation={navigation}
          />
        : null}
    </>
  )
}

export default Header
