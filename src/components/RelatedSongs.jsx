import SongBar from './SongBar'

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-3xl text-white'>Related Songs: </h1>
    
      <div className="mt-6 w-full flex flex-col">
        {data.result.songs.map((song, i) => (
          <SongBar 
            i={i}
            key={song.id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            data={data}
          />
        ))}
      </div>
    </div>
)};

export default RelatedSongs;
