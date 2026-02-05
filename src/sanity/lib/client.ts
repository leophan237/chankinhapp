import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
    stega: {
        enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview',
        studioUrl: '/studio',
    },
})

export const token = process.env.SANITY_API_READ_TOKEN
