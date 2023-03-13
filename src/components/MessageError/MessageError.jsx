import styles from './message-error.module.css'

export default function MessageError ({ messageError }) {
  return (
    <div className={styles.messageError__container}>
      <p className={styles.messageError__message}>{messageError}</p>
    </div>
  )
}
