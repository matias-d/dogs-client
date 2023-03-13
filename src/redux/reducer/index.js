/* eslint-disable no-case-declarations */
import { CREATE_BREED, FILTER_BREEDS, FILTER_TEMPERAMENT, GET_ALL_BREEDS, GET_BREED_BY_NAME, GET_TEMPERAMENTS, ORDER_BY, START_FETCHING, START_POSTING } from '../actions/types'

const initialState = {
  breeds: [],
  breedsForFilters: [],
  isLoading: true,
  isLoadingPost: false,
  temperaments: []
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case START_FETCHING :
      return {
        ...state,
        isLoading: true
      }

    case START_POSTING :
      return {
        ...state,
        isLoadingPost: true
      }

    case GET_ALL_BREEDS:
      return {
        ...state,
        isLoading: false,
        breeds: action.payload,
        breedsForFilters: action.payload
      }
    case GET_BREED_BY_NAME :
      return {
        ...state,
        isLoading: false,
        breeds: action.payload
      }

    case GET_TEMPERAMENTS :
      return {
        ...state,
        temperaments: action.payload
      }

    case CREATE_BREED :
      return {
        ...state,
        isLoadingPost: false,
        breeds: state.breeds.unshift(action.payload)
      }

    case FILTER_TEMPERAMENT :

      const allTemperaments = [...state.breedsForFilters]
      const filteredTemperaments = action.payload === 'Alls'
        ? allTemperaments
        : allTemperaments.filter(temp => temp.Temperaments?.some(el => el.name === action.payload))

      return {
        ...state,
        breeds: filteredTemperaments
      }

    case FILTER_BREEDS :

      const allBreeds = [...state.breedsForFilters]
      let filteredBreeds = []
      if (action.payload === 'Alls') filteredBreeds = filteredBreeds.concat(allBreeds)
      if (action.payload === 'db') filteredBreeds = allBreeds.filter(breed => breed.created === true)
      if (action.payload === 'api') filteredBreeds = allBreeds.filter(breed => breed.created === false)
      return {
        ...state,
        breeds: filteredBreeds
      }

    case ORDER_BY :

      let breedsToOrder = [...state.breeds]
      breedsToOrder = breedsToOrder.sort((a, b) => {
        switch (action.payload) {
          case 'a-z' :
            if (a.name < b.name) return -1
            else return 1
          case 'z-a' :
            if (a.name > b.name) return -1
            else return 1
          case 'min-weight' :
            if (a.weight.min_weight < b.weight.min_weight) return -1
            else return 1
          case 'max-weight':
            if (a.weight.max_weight > b.weight.max_weight) return -1
            else return 1
          default : return 0
        }
      })

      return {
        ...state,
        breeds: breedsToOrder
      }

    default :
      return { ...state }
  }
}

export default rootReducer
