import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetArtistQuery, useGetAlbumsQuery } from "../redux/services/youtubeMusic";

const SongDetails = () => {
    const dispatch = useDispatch()
    const { songid } = useParams()
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    // const { data: songData, isFecthing: isFetchingSongDetails  } = useGetArtistQuery(songid)
    const { data, isFetching, Error } = useGetAlbumsQuery()

    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    const handlePlayClick =(song = data.result.songs[0], i = data.result.songs[0].id) => {
        dispatch(setActiveSong({ song, i, data }))
        dispatch(playPause(true))
    }

    if(isFetching) return <Loader />

    if(Error) return <Error />

    console.log("checking another data", data)
    return (
        <div className="flex flex-col">
            <DetailsHeader data={data} artist={data && data.result.artists[0]} />
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

                <div className="mt-5">
                    { data ? data.result.songs.map( song => (
                        <>
                            <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quos non, rerum incidunt veniam unde, architecto tempore quibusdam, quam necessitatibus deserunt illum. Magni neque molestiae, eaque labore tempore sint dignissimos.</p>
                        </>
                    )) : (
                        <h3 className="text-white"> No lyrics found </h3>
                    )}
                </div>
            </div>
            <RelatedSongs 
                data={data}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
            />
        </div>
    )
}

export default SongDetails;
