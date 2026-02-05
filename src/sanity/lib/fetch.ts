
import { createClient, type QueryParams } from 'next-sanity'
import { draftMode } from 'next/headers'
import { apiVersion, dataset, projectId, useCdn } from '../env'
import { token } from './client'

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    revalidate = 3600, // default 1 hour
    tags = [],
}: {
    query: string
    params?: QueryParams
    revalidate?: number | false
    tags?: string[]
}) {
    const isDraftMode = (await draftMode()).isEnabled

    if (isDraftMode && !token) {
        throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.')
    }

    const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
        stega: {
            enabled: isDraftMode,
            studioUrl: '/studio',
        },
    })

    return client.fetch<QueryResponse>(query, params, {
        ...(isDraftMode && {
            token: token,
            perspective: 'previewDrafts',
        }),
        next: {
            revalidate: isDraftMode ? 0 : revalidate,
            tags,
        },
    })
}
