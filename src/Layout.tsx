import { Outlet } from 'react-router-dom'
import NavBar from './components/navigation/NavBar'

const Layout = () => (
  <div className={'container'}>
    <NavBar />

    <div className="container text-center main-container">
      <Outlet />
    </div>
  </div>
)

export default Layout
