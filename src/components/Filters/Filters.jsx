import React from 'react'
import styles from './filters.module.css'
export default function Filters () {
  return (
    <div className={styles.breeds__filtering}>

      <div className={styles.breeds__items_container}>
        <label className={styles.breeds__filter_label}>Filter By Breeds</label>
        <select className={styles.filtering__select}>
          <option>Create of</option>
          <option>Create of</option>
          <option>Create of</option>
          <option>Create of</option>
        </select>
      </div>
      <div className={styles.breeds__items_container}>
        <label className={styles.breeds__filter_label}>Filter By Temperaments</label>

        <select className={styles.filtering__select}>
          <option>Temperaments</option>
          <option>Temperaments</option>
          <option>Temperaments</option>
          <option>Temperaments</option>
          <option>Temperaments</option>
        </select>
      </div>

      <div className={styles.breeds__items_container}>
        <label className={styles.breeds__filter_label}>Filter By Created</label>

        <select className={styles.filtering__select}>
          <option>Order By</option>
          <option>Order By</option>
          <option>Order By</option>
          <option>Order By</option>
          <option>Order By</option>
        </select>
      </div>
      <div className={styles.breeds__items_container}>
        <label className={styles.breeds__filter_label}>Order By Breed</label>

        <select className={styles.filtering__select}>
          <option>weight</option>
          <option>weight</option>
          <option>weight</option>
          <option>weight</option>
          <option>weight</option>
        </select>
      </div>
      <div className={styles.breeds__items_container}>
        <label className={styles.breeds__filter_label}>Order By Weight</label>
        <select className={styles.filtering__select}>
          <option>Breeds</option>
          <option>Breeds</option>
          <option>Breeds</option>
          <option>Breeds</option>
          <option>Breeds</option>

        </select>
      </div>
    </div>
  )
}
