import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTemperaments, filterBreeds, filterTemperament, orderBy } from '../../redux/actions'
import styles from './filters.module.css'
export default function Filters () {
  const temperaments = useSelector(state => state.temperaments)
  const dispatch = useDispatch()

  const temperamentsToOrder = temperaments.sort((a, b) => {
    if (a.name > b.name) { return 1 }
    if (a.name < b.name) { return -1 }
    return 0
  })

  useEffect(() => {
    if (!temperaments.length)dispatch(fetchTemperaments())
  }, [])

  const onFilterTemperament = (e) => {
    dispatch(filterTemperament(e.target.value))
  }

  const onFilterBreeds = (e) => {
    dispatch(filterBreeds(e.target.value))
  }

  const onOrderBy = (e) => {
    dispatch(orderBy(e.target.value))
  }

  return (
    <div className={styles.breeds__filtering}>

      <div className={styles.breeds__items_container}>
        <label className={styles.breeds__filter_label}>Filter By Temperaments</label>
        <select onChange={(e) => onFilterTemperament(e)} className={styles.filtering__select}>
          <option value='Alls'>All</option>
          {
            temperamentsToOrder.map(temp => (
              <option key={temp.name} value={temp.name}>{temp.name}</option>
            ))
          }
        </select>
      </div>
      <div className={styles.breeds__items_container}>
        <label className={styles.breeds__filter_label}>Filter By Breeds</label>

        <select className={styles.filtering__select} onChange={(e) => onFilterBreeds(e)}>
          <option value='Alls'>All</option>
          <option value='api'>API</option>
          <option value='db'>New Breeds</option>
        </select>
      </div>

      <div className={styles.breeds__items_container}>
        <label className={styles.breeds__filter_label}>Order By Breeds</label>

        <select onChange={(e) => onOrderBy(e)} className={styles.filtering__select}>
          <option value='a-z'>A-Z</option>
          <option value='z-a'>Z-A</option>
        </select>
      </div>
      <div className={styles.breeds__items_container}>
        <label className={styles.breeds__filter_label}>Order By Weight</label>

        <select onChange={(e) => onOrderBy(e)} className={styles.filtering__select}>
          <option value='min-weight'>Min</option>
          <option value='max-weight'>Max</option>
        </select>
      </div>
    </div>
  )
}
