import React from 'react'
import styles from './breeds-card.module.css'
import { Link } from 'react-router-dom'
export default function BreedsCard ({ breed }) {
  return (
    <div className={styles.bredsList__card}>
      <Link to={`/breed/${breed.id}`}>
        <img src={breed.image} className={styles.card__img} />
      </Link>
      <h2 className={styles.card__name}>{breed.name}</h2>
      <div className={styles.card__temperament_container}>
        <h4 className={styles.temperament__title}>Temperaments :</h4>
        {
            breed.Temperaments?.map(temperament => (
              <p key={temperament.name} className={styles.card__temperament}>{temperament.name}</p>
            ))
                  }
      </div>
      <div className={styles.card__weight_container}>
        <p className={styles.card__weight}>Min  <span>{breed.weight?.min_weight} kg</span></p>
        <p className={styles.card__weight}>Max  <span>{breed.weight?.max_weight} kg</span></p>
      </div>

    </div>
  )
}
