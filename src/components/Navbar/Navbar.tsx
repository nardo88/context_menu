import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav__item">
          <Link to={'/'}>table</Link>
        </li>
        <li className="nav__item">
          <Link to={'/grid'}>grid</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
