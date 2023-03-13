import axios from 'axios'
import { API_URL_TEMPERAMENTS } from './API_URL'

export async function getTemperaments () {
  try {
    const result = await axios(API_URL_TEMPERAMENTS)
    return await result.data
  } catch (error) {
    console.error(error.message)
  }
}
