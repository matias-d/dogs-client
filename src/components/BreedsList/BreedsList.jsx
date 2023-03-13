
import BreedsCard from '../BreedsCard/BreedsCard'
import styles from './breeds-list.module.css'

export default function BreedsList ({ breeds }) {
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
