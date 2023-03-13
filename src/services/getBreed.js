import axios from 'axios'
import { API_URL } from './API_URL'

export async function getBreed (id) {
  try {
    const result = await axios(`${API_URL}/${id}`)
    return await result.data
  } catch (error) {
    console.error(error.message)
  }
}
