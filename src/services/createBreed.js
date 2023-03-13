import axios from 'axios'
import { API_URL } from './API_URL'

export async function createBreed (newBreed) {
  try {
    const result = await axios.post(API_URL, newBreed)
    return await result.data
  } catch (error) {
    console.error(error.message)
  }
}
