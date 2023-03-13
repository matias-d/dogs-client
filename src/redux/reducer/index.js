import { CREATE_BREED, GET_ALL_BREEDS, GET_BREED_BY_NAME, GET_TEMPERAMENTS, START_FETCHING, START_POSTING } from '../actions/types'

const initialState = {
  breeds: [],
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
        breeds: action.payload
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
    default :
      return { ...state }
  }
}

export default rootReducer
