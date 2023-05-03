import NavLink from './NavLink'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <NavLink location={'/'} text={'Inicio'} />
        <NavLink location={'/conocenos'} text={'Conócenos'} />
        <NavLink location={'/servicios'} text={'Servicios'} />
        <NavLink location={'/galeria'} text={'Galería'} />
        <NavLink location={'/contacto'} text={'Contacto'} />
      </div>
    </nav>
  )
}

export default NavBar
