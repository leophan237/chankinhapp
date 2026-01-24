import { type SchemaTypeDefinition } from 'sanity'
import post from './schemas/post'
import homepage from './schemas/homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, homepage],
}
