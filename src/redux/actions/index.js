import { createBreed } from '../../services/createBreed'
import { getBreedByName as getBreedByNameAPI } from '../../services/getBreedByName'
import { getBreeds } from '../../services/getBreeds'
import { getTemperaments as getTemperamentsAPI } from '../../services/getTemperaments'
import { CREATE_BREED, GET_ALL_BREEDS, GET_BREED_BY_NAME, GET_TEMPERAMENTS, START_FETCHING, START_POSTING } from './types'

function getAllBreeds (allBreeds) {
  return {
    type: GET_ALL_BREEDS,
    payload: allBreeds
  }
}

export function fetchAllBreeds () {
  return function (dispatch) {
    dispatch(startFetching())
    getBreeds()
      .then(res => dispatch(getAllBreeds(res)))
  }
}

function getBreedByName (result) {
  return {
    type: GET_BREED_BY_NAME,
    payload: result
  }
}

function startFetching () {
  return {
    type: START_FETCHING
  }
}

function startPosting () {
  return {
    type: START_POSTING
  }
}

export function fetchBreedByName (breedName) {
  return function (dispatch) {
    dispatch(startFetching())
    getBreedByNameAPI(breedName)
      .then(res => dispatch(getBreedByName(res)))
  }
}

function getTemperaments (temperaments) {
  return {
    type: GET_TEMPERAMENTS,
    payload: temperaments
  }
}

export function fetchTemperaments () {
  return function (dispatch) {
    getTemperamentsAPI()
      .then(res => dispatch(getTemperaments(res)))
  }
}

function createNewBreed (newBreed) {
  return {
    type: CREATE_BREED,
    payload: newBreed
  }
}

export function postBreed (newBreed) {
  return function (dispatch) {
    dispatch(startPosting())
    createBreed(newBreed)
      .then(res => {
        dispatch(createNewBreed(res))
        dispatch(fetchAllBreeds())
      })
  }
}
