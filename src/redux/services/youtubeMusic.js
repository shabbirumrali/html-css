import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '7070e854dfmsha33f4dcfafa5a04p16eae9jsnc5befb3a6e7e',
//       'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://youtube-music1.p.rapidapi.com/v2/get_album?album_id=MPREb_WALokSukf0y', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

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
        getAlbums: builder.query({ query: () => '/get_album?album_id=MPREb_WALokSukf0y' })
    })
})

export const {
    useGetAlbumsQuery
} = youtubeMusicApi