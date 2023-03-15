import styles from './breeds-card.module.css'
import logo from '../../assets/svg/icon-svg.svg'
import { Link } from 'react-router-dom'
export default function BreedsCard ({ breed }) {
  return (
    <article className={styles.bredsList__card}>
      <Link to={`/breed/${breed.id}`} className={styles.card_img_container}>
        <img src={breed.image} alt={`dog of breed ${breed.name}`} className={styles.card__img} />
        <img src={logo} alt='logo of doggi' className={styles.card__logo_hover} />
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

    </article>
  )
}
