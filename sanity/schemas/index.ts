import { post } from './post'
import { lesson } from './lesson'
import { course } from './course'
import { blockContent } from './blockContent'
import { homepage } from './homepage'

export const schema = {
  types: [post, lesson, course, blockContent, homepage],
}
