import Header from './header/index'

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
