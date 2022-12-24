import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const youtubeMusicApi = createApi({
    reducerPath: 'youtubeMusicApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://youtube-music1.p.rapidapi.com/v2',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '7070e854dfmsha33f4dcfafa5a04p16eae9jsnc5befb3a6e7e')
            return headers
        } 
    }),
    endpoints: (builder) => ({
        getAlbums: builder.query({ query: () => '/get_album?album_id=MPREb_WALokSukf0y' }),
        getArtist: builder.query({ query: ({ songid }) => `/get_artist?artist_id=${songid}` }),
        getArtistInfo: builder.query({ query: ({ artistid }) =>  `/get_artist?artist_id=${artistid}`})
    })
})

export const {
    useGetAlbumsQuery,
    useGetArtistQuery,
    useGetArtistInfoQuery
} = youtubeMusicApi