import { Link, Outlet } from 'react-router-dom'
import cls from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={cls.layout}>
      <ul className={cls.nav}>
        <li className={cls.navItem}>
          <Link to={'/'}>table</Link>
        </li>
        <li className={cls.navItem}>
          <Link to={'/grid'}>grid</Link>
        </li>
      </ul>
      <div className={cls.content}>
        <Outlet />
      </div>
    </div>
  )
}
