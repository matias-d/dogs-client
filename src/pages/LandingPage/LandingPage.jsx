import styles from './landing-page.module.css'
import dogGroups from '../../assets/landing-assets/group-dogs.png'
import { Link } from 'react-router-dom'
import background from '../../assets/landing-assets/Vector 4.svg'
import landingDog from '../../assets/landing-assets/landing-dog.png'

export default function LandingPage () {
  return (
    <section className={styles.hero}>
      <img src={background} alt='background vector' className={styles.hero__background} />
      <div className={styles.hero__present}>
        <img src={dogGroups} alt='dogs group' className={styles.hero__groupdogs} />
        <h1 className={styles.hero__legend}>Discover the wonderfu World of Dog <span>Breeds</span></h1>
        <p className={styles.hero__desc}>From Affectionate Retrievers to Loyal Shepherds: Dive Into Our Comprehensive Guide to the Diverse World of Dog Breeds and Find Your Perfect Companion.</p>
        <Link to='/breeds' className={styles.hero__btn}>Explore now</Link>

      </div>
      <img src={landingDog} alt='dog' className={styles.hero__img} width='650' height='650' />
    </section>
  )
}
