import styles from './create-breed-page.module.css'
import background from '../../assets/svg/wave.svg'
import Form from '../../components/Form/Form'
export default function CreateBreedPage () {
  return (
    <>
      <img src={background} className={styles.background} />
      <main className={styles.createBreed}>
        <Form />
      </main>
    </>
  )
}
