import React from 'react'
import styles from './breed-card-detail.module.css'

import iconBalance from '../../assets/icon-balance.png'
import iconHueso from '../../assets/icon-hueso.png'
import iconDog from '../../assets/icon-life-span.png'

export default function BreedCardDetail ({ breed }) {
  return (
    <div className={styles.breedDetail__info_container}>
      <h5 className={styles.breedDetail__about}>About <span>of</span></h5>
      <h1 className={styles.breedDetail__name}>{breed.name}</h1>
      <div className={styles.breedDetail__temperaments_container}>
        <h3 className={styles.breedDetail__temperaments_title}>Temperaments: </h3>
        <div className={styles.breedDetail__temperaments}>
          {
            breed.Temperaments?.map(temperament => (
              <p key={temperament.name} className={styles.breedDetail__temperament}>{temperament.name}</p>
            ))
          }
        </div>

      </div>
      <section className={styles.breedDetail__aditionals}>
        <div className={styles.breedDetail__aditional}>
          <img src={iconBalance} alt='icon balance' className={styles.breedDetail__icon} />
          <h4 className={styles.breedDetail__legend}>Weight</h4>
          <p className={styles.breedDetail__types}>{breed.weight?.min_weight}kg - {breed.weight?.max_weight}kg</p>
        </div>
        <div className={styles.breedDetail__aditional}>
          <img src={iconHueso} alt='icon bone' className={styles.breedDetail__icon} />
          <h4 className={styles.breedDetail__legend}>Height</h4>
          <p className={styles.breedDetail__types}>{breed.height?.min_height} - {breed.height?.max_height}</p>
        </div>
        <div className={styles.breedDetail__aditional}>
          <img src={iconDog} alt='icon a dog whit heart' className={styles.breedDetail__icon} />
          <h4 className={styles.breedDetail__legend}>Life Span</h4>
          <p className={styles.breedDetail__types}>{breed.life_span?.min_life_span} - {breed.life_span?.max_life_span} yrs</p>
        </div>
      </section>
    </div>
  )
}
