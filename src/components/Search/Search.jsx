import React, { useState } from 'react'
import styles from './search.module.css'
import searchSvg from '../../assets/svg/search.svg'
import { useDispatch } from 'react-redux'
import { fetchBreedByName } from '../../redux/actions'

export default function Search () {
  const [breedName, setBreedName] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setBreedName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchBreedByName(breedName))
    setBreedName('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.breeds__input_container}>
      <input type='text' placeholder='Search breeds' value={breedName} className={styles.breeds__search} onChange={e => handleChange(e)} />
      <img src={searchSvg} className={styles.breeds__search_svg} />
    </form>
  )
}
