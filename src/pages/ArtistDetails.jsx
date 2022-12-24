import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetAlbumsQuery, useGetArtistInfoQuery } from "../redux/services/youtubeMusic";

const ArtistDetails = () => {
    const { id: artistId } = useParams()
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data, isFetching, Error } = useGetArtistInfoQuery(artistId)

    if(isFetching) return <Loader title="Loading... Artist details" />

    if(Error) return <Error />

    console.log("checking another data", data)
    return (
        <div className="flex flex-col">
            <DetailsHeader 
              data={data} 
              artist={data && data.result.artists[0]} 
            />
            
            <RelatedSongs
                data={data}
                isPlaying={isPlaying}
                activeSong={activeSong}
            />
        </div>
    )
}

export default ArtistDetails;
