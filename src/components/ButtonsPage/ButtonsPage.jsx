import React from 'react'
import styles from './buttons-page.module.css'
import arrowLeftSvg from '../../assets/svg/arrow-left.svg'
import arrowRightSvg from '../../assets/svg/arrow-right.svg'
import { useDispatch } from 'react-redux'
import { fetchAllBreeds } from '../../redux/actions'
export default function ButtonsPage ({ onPage, page, limitPage }) {
  const dispatch = useDispatch()

  return (
    <div className={styles.breeds__pages_btns}>
      <button disabled={page === 1} className={page === 1 ? styles.breeds__btn_disabled : styles.breeds__btn} onClick={() => onPage(page - 1)}>
        <img src={arrowLeftSvg} className={styles.breeds__icon} />
      </button>
      {
        limitPage > 1
          ? <h3 className={styles.breeds__numberPage}>Page: {page} of {Math.ceil(limitPage)}</h3>
          : <button className={styles.breeds__viewAll} onClick={() => dispatch(fetchAllBreeds())}>Back to go</button>
      }
      <button className={page === Math.ceil(limitPage) ? styles.breeds__btn_disabled : styles.breeds__btn} onClick={() => onPage(page + 1)}>
        <img src={arrowRightSvg} className={styles.breeds__icon} />
      </button>
    </div>
  )
}
