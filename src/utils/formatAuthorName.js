import capitalizeAll from './capitalizeAll'
import replaceAll from './replaceAll'

const formatAuthorName = authorSlug => {
  authorSlug = replaceAll(authorSlug, '-', ' ')
  authorSlug = capitalizeAll(authorSlug)

  return authorSlug
}

export default formatAuthorName
