import { useState } from 'react'
import Heads from './head/Heads'
import Navbar from './navbar/Navbar'
import Menu from './menu/Menu'
import ShadowDrop from '../ShadowDrop'
import Form from '../Form'

const navigation = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'Галерея работ', path: '/album' },
  { id: 3, title: 'Доставка', path: '/shipping' },
  { id: 4, title: 'О компании', path: '/about' },
  { id: 5, title: 'Контакты', path: '/contacts' }
]

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [shadowForm, setShadowForm] = useState(false)

  const menuIconHandler = setup => {
    if (setup === 'close') {
      setMenu(false)
    } else {
      setMenu(!menu)
    }
  }

  const buttonFormHandler = () => {
    setShadowForm(true)
  }

  const shadowHandler = (e) => {
    if (!e.target.className.includes || e.target.className.includes('ShadowDrop')) {
      setShadowForm(false)
    }
  }

  return (
    <>
      <Heads
        menu={menu}
        menuIconHandler={menuIconHandler}
        buttonFormHandler={buttonFormHandler}
      />
      <Navbar
        navigation={navigation}
      />
      {menu
        ? <Menu
            menuIconHandler={menuIconHandler}
            navigation={navigation}
          />
        : null
      }
      {shadowForm
        ? <ShadowDrop shadowHandler={shadowHandler}>
            <Form shadowHandler={shadowHandler} />
          </ShadowDrop>
        : null
      }
    </>
  )
}

export default Header
