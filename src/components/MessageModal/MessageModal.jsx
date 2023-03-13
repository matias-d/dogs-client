import styles from './message-modal.module.css'
export default function MessageModal ({ message, style }) {
  return (
    <div className={styles[`messageModal__${style}`]}>
      <p className={styles.messageModal__message}>{message}</p>
    </div>
  )
}
