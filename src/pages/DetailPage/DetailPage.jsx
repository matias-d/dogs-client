import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBreed } from '../../services/getBreed'
import styles from './detail-page.module.css'
import BreedCardDetail from '../../components/BreedCardDetail/BreedCardDetail'
import arrowLeftSvg from '../../assets/svg/arrow-left.svg'
import Loader from '../../components/Loader/Loader'
import wave from '../../assets/svg/wave.svg'

export default function DetailPage () {
  const { id } = useParams()
  const [breed, setBreed] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getBreed(id).then(res => {
      setBreed(res)
      setLoading(false)
    })

    return () => {
      setBreed({})
    }
  }, [id])

  return (
    <>
      <main className={styles.breedDetail}>
        <img src={wave} className={styles.breedDetail__wave} />
        <Link to='/breeds' className={styles.breedDetail__backTo}><img src={arrowLeftSvg} /> Back to go</Link>
        {
          loading
            ? <Loader />
            : (
              <>
                <img src={breed.image} width='450' height='400' className={styles.breedDetail__img} />
                <BreedCardDetail breed={breed} />
              </>
              )
        }

      </main>
    </>
  )
}
