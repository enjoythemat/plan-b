import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Header />
    <Navbar />
    {children}
    <Footer />
  </>
)

export default Layout
