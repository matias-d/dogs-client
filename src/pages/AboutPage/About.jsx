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
            Doggi is an online platform that allows users to explore a wide variety of dog breeds, sort and filter them according to their preferences, and create new breeds.<br />
            Overall, Doggi is a well-designed and feature-rich platform that provides a comprehensive and engaging experience for dog lovers everywhere.<br />
            For the part of the use of the backend it uses express allowing to manage my controllers and my routes, my database was Postgress and sequalize as my orm to simplify the development<br />
            On the frontend side, use react, react-router for routes and Redux for global state management, providing a centralized store to manage application state.
          </p>
          <div className={styles.about__by}>
            <h4 className={styles.by__me}>By <span>Matias Cabrera</span></h4>
            <div className={styles.about__contact}>
              <a href='https://github.com/matias-d' target='_blank' rel='noreferrer'><img src={logoGitHub} alt='icon Github' /></a>
              <a href='https://www.linkedin.com/in/matias-e-cabrera/' target='_blank' rel='noreferrer'><img src={logoLinkedin} alt='icon Linkedin' /></a>
            </div>
          </div>
        </div>
        <img src={imageAbout} alt='person with a dog' className={styles.about__img} width='400' height='500' />
      </main>
    </>
  )
}
