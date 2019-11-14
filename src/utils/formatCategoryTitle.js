import capitalize from './capitalize'
import replaceAll from './replaceAll'

const formatCategoryTitle = categorySlug => {
  categorySlug = replaceAll(categorySlug, '-', ' ')
  categorySlug = capitalize(categorySlug)

  return categorySlug
}

export default formatCategoryTitle
