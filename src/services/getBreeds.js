import axios from 'axios'
import { API_URL } from './API_URL'

export async function getBreeds () {
  try {
    const result = await axios(API_URL)
    return await result.data
  } catch (error) {
    console.error(error.message)
  }
}
