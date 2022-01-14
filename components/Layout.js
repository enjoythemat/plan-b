import Header from './header/index'
import Footer from './Footer'

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
