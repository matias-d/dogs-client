/* eslint-disable camelcase */

export function isFieldComplete (data) {
  const { name, image, weight: { min_weight, max_weight }, height: { min_height, max_height }, life_span: { min_life_span, max_life_span }, temperaments } = data

  if (!name.length || !image.length || !min_weight.length || !max_weight.length || !min_height.length || !max_height.length || !min_life_span.length || !max_life_span.length || !temperaments.length) return false

  return true
}
