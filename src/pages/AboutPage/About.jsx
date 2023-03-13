import imageAbout from '../../assets/about-image.png'
import styles from './about.module.css'
import logoGitHub from '../../assets/svg/github.svg'
import logoLinkedin from '../../assets/svg/linkedin.svg'
import background from '../../assets/svg/wave.svg'
export default function About () {
  return (
    <>
      <img src={background} className={styles.background} />
      <main className={styles.about}>
        <div className={styles.about__info}>
          <h3 className={styles.about__intro}>About <span>Us</span></h3>
          <h2 className={styles.about__title}>Proyect Individual of <span>Henry</span> Bootcamp</h2>
          <p className={styles.about__desc}>
            The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
          </p>
          <div className={styles.about__by}>
            <h4 className={styles.by__me}>By <span>Matias Cabrera</span></h4>
            <div className={styles.about__contact}>
              <img src={logoGitHub} />
              <img src={logoLinkedin} />
            </div>
          </div>
        </div>
        <img src={imageAbout} className={styles.about__img} width='400' height='500' />
      </main>
    </>
  )
}
