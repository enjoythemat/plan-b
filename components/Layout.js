import Header from './Header'
import Navbar from './Navbar'
// import Footer from './Footer'
import { useState } from 'react'

const Layout = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const menuClickHandler = payload => {
    if (payload === 'Close') {
      setMenuIsOpen(false)
    } else {
      setMenuIsOpen(!menuIsOpen)
    }
  }

  return (
    <>
      <Header
        menuClickHandler={menuClickHandler}
        menuIsOpen={menuIsOpen}
      />
      <Navbar
        menuClickHandler={menuClickHandler}
      />
      {children}
      {/*<Footer />*/}
    </>
  )
}

export default Layout
