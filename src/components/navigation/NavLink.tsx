import { Link, useLocation } from 'react-router-dom'
import { FC } from 'react'
import isLinkDisabled from './isLinkDisabled'

interface NavLinkProps {
  location: string
  text: string
}

const NavLink: FC<NavLinkProps> = (props) => {
  const { location, text } = props
  const { pathname } = useLocation()
  return (
    <div className="nav-item">
      <Link
        to={location}
        className={`nav-link ${isLinkDisabled(location, pathname)}`}
      >
        {text}
      </Link>
    </div>
  )
}

export default NavLink
