/* eslint-disable camelcase */
const regexImage = /^(ftp|http|https):\/\/[^ "]+$/
const regexNumber = /\d/
export function validateData (data) {
  const { weight: { min_weight, max_weight }, height: { min_height, max_height }, life_span: { min_life_span, max_life_span } } = data

  const obj = {}

  if (data.name.length <= 3 || data.name.length > 35) obj.name = 'The field has to count between 3 and 35 characters'
  if (data.image.length && !regexImage.test(data.image)) obj.image = 'This field must be a url'
  if (min_weight.length && !regexNumber.test(min_weight)) obj.min_weight = 'This field must contain only numbers'
  if (max_weight.length && !regexNumber.test(max_weight)) obj.max_weight = 'This field must contain only numbers'
  if (min_height.length && !regexNumber.test(min_height)) obj.min_height = 'This field must contain only numbers'
  if (max_height.length && !regexNumber.test(max_height)) obj.max_height = 'This field must contain only numbers'
  if (min_life_span.length && !regexNumber.test(min_life_span)) obj.min_life_span = 'This field must contain only numbers'
  if (max_life_span.length && !regexNumber.test(max_life_span)) obj.max_life_span = 'This field must contain only numbers'

  return obj
}
