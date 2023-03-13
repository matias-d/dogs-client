import styles from './breeds-page.module.css'
import BreedsList from '../../components/BreedsList/BreedsList'
import Filters from '../../components/Filters/Filters'
import Search from '../../components/Search/Search'
import ButtonsPage from '../../components/ButtonsPage/ButtonsPage'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllBreeds } from '../../redux/actions'
import Loader from '../../components/Loader/Loader'
export default function BreedsPage () {
  const breeds = useSelector(state => state.breeds)
  const isLoading = useSelector(state => state.isLoading)
  const [page, setPage] = useState(1)
  const limitPage = breeds.length / 8
  const lastBreed = page * 8
  const firstBreed = lastBreed - 8
  const currentBreeds = limitPage > 1 ? breeds.slice(firstBreed, lastBreed) : breeds
  const dispatch = useDispatch()

  useEffect(() => {
    if (!breeds.length) dispatch(fetchAllBreeds())
  }, [page])

  return (
    <>
      <div className={styles.breeds__present_container}>
        <div className={styles.breeds__legend_container}>
          <h1 className={styles.breeds__legend}>Breeds of all <span>kindse</span></h1>
          <p className={styles.breeds__desc}>When it comes to dog breeds, there are many different options to choose from. Whether you're looking for a small lap dog or a large guard dog, there's a breed out there that can meet your needs.</p>
        </div>
        <img src='https://img.freepik.com/foto-gratis/hermoso-retrato-mascota-perro_23-2149218452.jpg?w=900&t=st=1678221154~exp=1678221754~hmac=f89721362df372a44e3c4e4fa3230b83ae1941fdfc889ac9eed97a6a3608287f' className={styles.breeds_img} alt='image a dog with glasses' />
      </div>
      <section className={styles.breeds__container}>
        <div className={styles.breeds__actions}>
          <Search />
          <Filters />
        </div>
        <div className={styles.breeds__views}>
          {
            isLoading
              ? <Loader />
              : (
                <>
                  <ButtonsPage onPage={setPage} page={page} limitPage={limitPage} />
                  <BreedsList breeds={currentBreeds} page={page} />
                  <ButtonsPage onPage={setPage} page={page} limitPage={limitPage} />
                </>
                )
          }
        </div>
      </section>
    </>
  )
}
