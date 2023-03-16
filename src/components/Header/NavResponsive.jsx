import closeSvg from '../../assets/svg/close.svg'
import { Link } from 'react-router-dom'

export default function NavResponsive ({ openModal, setOpenModal, styles }) {
  return (
    <div className={styles.header__modal}>
      <div className={styles.header__legend_container}>
        <h2 className={styles.header__name_responsive}>DOGGI</h2>
        <button className={styles.header__close_container} onClick={() => setOpenModal(!openModal)}>
          <img src={closeSvg} alt='icon close' className={styles.header__close_svg} />
        </button>
      </div>
      <ul className={styles.header__list_modal}>
        <li className={styles.list__items_modal} onClick={() => setOpenModal(false)}>
          <Link to='/dogs-client'>
            Home
          </Link>
        </li>
        <li className={styles.list__items_modal} onClick={() => setOpenModal(false)}>
          <Link to='/breeds'>
            Breeds
          </Link>
        </li>
        <li className={styles.list__items_modal} onClick={() => setOpenModal(false)}>
          <Link to='/about'>
            About Us
          </Link>
        </li>
        <li className={styles.list__items_create} onClick={() => setOpenModal(false)}><Link to='/create-breed'>Create Breed </Link> </li>
      </ul>
    </div>
  )
}
