import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTemperaments, postBreed } from '../../redux/actions'
import styles from './form.module.css'
import { validateData } from '../../utils/validateCreate'
import MessageError from '../MessageError/MessageError'
import { isFieldComplete } from '../../utils/isFieldComplete'
export default function Form () {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.isLoadingPost)
  const temperaments = useSelector((state) => state.temperaments)

  const [newBreed, setNewBreed] = useState({
    name: '',
    image: '',
    height: {
      min_height: '',
      max_height: ''
    },
    weight: {
      min_weight: '',
      max_weight: ''
    },
    life_span: {
      min_life_span: '',
      max_life_span: ''
    },
    temperaments: []
  })

  const [error, setError] = useState({
    name: '',
    image: '',
    min_weight: '',
    max_weight: '',
    min_height: '',
    max_height: '',
    min_life_span: '',
    max_life_span: '',
    temperaments: ''
  })

  const [formCompleted, setFormCompleted] = useState(true)

  const handleChange = (e) => {
    setNewBreed({
      ...newBreed,
      [e.target.name]: e.target.value
    })
    setError(validateData({
      ...newBreed,
      [e.target.name]: e.target.value
    }))
  }

  const handleChangeObj = (prop, e) => {
    setNewBreed({
      ...newBreed,
      [prop]: {
        ...newBreed[prop],
        [e.target.name]: e.target.value
      }
    })

    setError(validateData({
      ...newBreed,
      [prop]: {
        ...newBreed[prop],
        [e.target.name]: e.target.value
      }
    }))
  }

  const handleChangeTemp = (e) => {
    const { temperaments } = newBreed

    const isTempermaent = temperaments.some(t => t === e.target.value)

    if (!isTempermaent) setNewBreed({ ...newBreed, temperaments: [...newBreed.temperaments, e.target.value] })
    else window.alert('Is temperament already exist')
  }

  useEffect(() => {
    dispatch(fetchTemperaments())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isFieldComplete(newBreed)) {
      dispatch(postBreed(newBreed))
      setNewBreed({
        name: '',
        image: '',
        height: {
          min_height: '',
          max_height: ''
        },
        weight: {
          min_weight: '',
          max_weight: ''
        },
        life_span: {
          min_life_span: '',
          max_life_span: ''
        },
        temperaments: []
      })
      return
    }

    setFormCompleted(false)
    setTimeout(() => {
      setFormCompleted(true)
    }, 7000)
  }

  return (
    <form onSubmit={handleSubmit} className={formCompleted ? styles.createBreed__form : styles.createBreed__form_error}>
      <div className={styles.form__input_container}>
        <label htmlFor='' className={styles.form__label}>Name of the breed</label>
        <input placeholder='Pitbull' type='text' className={styles.form__input} name='name' value={newBreed.name} onChange={(e) => handleChange(e)} />
        {error.name && <MessageError messageError={error.name} />}
      </div>
      <div className={styles.form__input_container}>
        <label htmlFor='' className={styles.form__label}>Image of the breed</label>
        <input placeholder='https://imageupload.com' type='text' className={styles.form__input} name='image' value={newBreed.image} onChange={(e) => handleChange(e)} />
        {error.image && <MessageError messageError={error.image} />}
      </div>
      <div className={styles.form__input_container}>
        <label htmlFor='' className={styles.form__label}>Temperaments of the breed</label>
        <select name='temperaments' onChange={(e) => handleChangeTemp(e)} className={styles.form__select}>
          <option value=''>Select a temperament of breed</option>
          {
            temperaments.map(temper => (
              <option key={temper.name} value={temper.name}>{temper.name}</option>
            ))
          }
        </select>
        <div className={styles.temperaments__container}>
          {
                newBreed.temperaments?.map(temper => (
                  <p
                    key={temper} className={styles.temperament__item}
                  >{temper}
                  </p>
                ))
            }
        </div>
      </div>
      <div className={styles.form__input_container_doble}>
        <div className={styles.form__input_container}>
          <label htmlFor='' className={styles.form__label}>Weight min of the breed</label>
          <input placeholder='Number of weight min' type='text' className={styles.form__input} name='min_weight' onChange={(e) => handleChangeObj('weight', e)} value={newBreed.weight.min_weight} />
          {error.min_weight && <MessageError messageError={error.min_weight} />}
        </div>
        <div className={styles.form__input_container}>
          <label htmlFor='' className={styles.form__label}>Weight max of the breed</label>
          <input placeholder='Number of weight max' type='text' className={styles.form__input} name='max_weight' onChange={(e) => handleChangeObj('weight', e)} value={newBreed.weight.max_weight} />
          {error.max_weight && <MessageError messageError={error.max_weight} />}
        </div>
      </div>
      <div className={styles.form__input_container_doble}>
        <div className={styles.form__input_container}>
          <label htmlFor='' className={styles.form__label}>Height min of the breed</label>
          <input placeholder='Number of height min' type='text' className={styles.form__input} name='min_height' onChange={(e) => handleChangeObj('height', e)} value={newBreed.height.max_height} />
          {error.min_height && <MessageError messageError={error.min_height} />}
        </div>
        <div className={styles.form__input_container}>
          <label htmlFor='' className={styles.form__label}>Height max of the breed</label>
          <input placeholder='Number of height max' type='text' className={styles.form__input} name='max_height' onChange={(e) => handleChangeObj('height', e)} value={newBreed.height.max_height} />
          {error.max_height && <MessageError messageError={error.max_height} />}
        </div>
      </div>
      <div className={styles.form__input_container_doble}>
        <div className={styles.form__input_container}>
          <label htmlFor='' className={styles.form__label}>Life span min of the breed</label>
          <input placeholder='Number of life span min' type='text' className={styles.form__input} name='min_life_span' onChange={(e) => handleChangeObj('life_span', e)} value={newBreed.life_span.max_life_span} />
          {error.min_life_span && <MessageError messageError={error.min_life_span} />}
        </div>
        <div className={styles.form__input_container}>
          <label htmlFor='' className={styles.form__label}>Life span max of the breed</label>
          <input placeholder='Number of life span max' type='text' className={styles.form__input} name='max_life_span' onChange={(e) => handleChangeObj('life_span', e)} value={newBreed.life_span.max_life_span} />
          {error.max_life_span && <MessageError messageError={error.max_life_span} />}
        </div>
      </div>
      <button type='submit' disabled={isLoading} className={formCompleted ? styles.form__btn : styles.form__btn_error}>{isLoading ? 'Creating breed...' : 'Create Breed'}</button>
    </form>
  )
}
