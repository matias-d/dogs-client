
import BreedsCard from '../BreedsCard/BreedsCard'
import styles from './breeds-list.module.css'
import notFound from '../../assets/notFound.png'

export default function BreedsList ({ breeds }) {
  if (!breeds.length) {
    return (
      <div className={styles.notBreeds}>
        <p className={styles.notBreeds__error}>404 Not Found</p>
        <p className={styles.notBreeds__message}>
          The indicated breed was not found
        </p>
        <img src={notFound} alt='image of dog in sky' />
      </div>
    )
  }

  return (
    <div className={styles.breedsList}>
      {breeds &&
            breeds
              .map(breed => (
                <BreedsCard key={breed.id} breed={breed} />
              ))}
    </div>
  )
}
