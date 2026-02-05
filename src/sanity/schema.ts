import { type SchemaTypeDefinition } from 'sanity'
import post from './schemas/post'
import homepage from './schemas/homepage'
import { job } from './schemas/job'
import { product } from './schemas/product'
import { blockContent } from '../../sanity/schemas/blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, homepage, job, product, blockContent],
}
