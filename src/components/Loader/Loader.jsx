/* eslint-disable react/self-closing-comp */
import React from 'react'
import styles from './loader.module.css'
export default function Loader () {
  return (
    <div className={styles.loader__container}>

      <span className={styles.loader}></span>
    </div>
  )
}
