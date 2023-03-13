import axios from 'axios'
import { API_URL } from './API_URL'

export async function getBreedByName (breedName) {
  try {
    const result = await axios(`${API_URL}/name?q=${breedName}`)
    return await result.data
  } catch (error) {
    console.error(error.message)
  }
}
