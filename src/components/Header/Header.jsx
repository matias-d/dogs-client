import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavResponsive from './NavResponsive'
import styles from './header.module.css'
import logo from '../../assets/landing-assets/icon-svg.svg'
import menuSvg from '../../assets/svg/menu.svg'

const navLinks = [
  {
    path: '/dogs-client',
    item: 'Home'
  },
  {
    path: '/breeds',
    item: 'Breeds'
  },
  {
    path: '/about',
    item: 'About us'
  }
]

export default function Header () {
  const [openModal, setOpenModal] = useState(false)

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.header__logo_container}>
        <img src={logo} alt='logo of doggi' className={styles.header__logo} width='40' />
        <h2 className={styles.header__name}>DOGGI</h2>
      </Link>
      <ul className={styles.header__list}>
        {
          navLinks.map(link => (
            <li key={link.item}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? styles.list__items_active : styles.list__items}
              >
                {link.item}
              </NavLink>
            </li>
          ))
        }
        <li className={styles.list__items_create}><Link to='/create-breed'>Create Breed</Link></li>
      </ul>
      <button onClick={() => setOpenModal(!openModal)} className={styles.header__menu_container}>
        <img src={menuSvg} alt='icon menu hamburger' className={styles.header__menu_svg} />
      </button>
      {
        openModal && (
          <NavResponsive openModal={openModal} setOpenModal={setOpenModal} styles={styles} />
        )
      }

    </header>
  )
}
