import React from 'react'
import NavLink from './NavLink'

const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <NavLink location={'/'} text={'Inicio'} />
      </div>
    </nav>
  )
}

export default NavBar
