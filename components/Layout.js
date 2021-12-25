import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'

const Layout = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const menuClickHandler = () => {
    setMenuIsOpen(!menuIsOpen)
    console.log(menuIsOpen)
  }

  return (
    <>
      <Header
        menuClickHandler={menuClickHandler}
        menuIsOpen={menuIsOpen}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
