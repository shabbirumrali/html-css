import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'

import PlayPause from "./PlayPause"
import { playPause, setActiveSong } from "../redux/features/playerSlice"
import { useGetAlbumsQuery } from "../redux/services/youtubeMusic"

import 'swiper/css'
import 'swiper/css/free-mode'

const TopChartCard = ({ song, i, img, activeSong, isPlaying, handlePauseClick, handlePlayClick }) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="fot-bold text-base text-white mr-3">{i + 1}</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img className="w-20 h-20 rounded-lg" src={img} alt="song-title" />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.id}`}>
          <p className="font-bold text-xl text-white">{song.title}</p>
        </Link>
        <Link to={`/songs/${song.id}`}>
          <p className="text-base text-gray-300 mt-1">{song.artists[0].name}</p>
        </Link>
      </div>
    </div>
    <PlayPause 
      isPlaying={isPlaying} 
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={() => handlePlayClick(song, i)}
    />
  </div>
)

const TopPlay = () => {
  const dispatch = useDispatch()
  const {activeSong, isPlaying} = useSelector(state => state.player )
  const { data } = useGetAlbumsQuery()
  const divRef = useRef(null)

  const topPlays = data && data.result.songs.slice(0,5)

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick =(song, i) => {
    dispatch(setActiveSong({ song, i, data }))
    dispatch(playPause(true))
  }

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
  <div className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[400px] max-w-full flex flex-col" ref={divRef}>
    <div className="w-full flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white font-bold text-2xl">Top Charts</h2>
        <Link to="/top-charts">
          <p className="text-gray-300 text-base cursor-pointer">See more</p>
        </Link>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        {topPlays?.map((song, i) => (
          <TopChartCard 
            key={song.id} 
            song={song} 
            i={i} 
            img={data.result.thumbnail}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick} 
          />
        ))}
      </div>
    </div>

    <div className="w-full flex flex-col mt-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white font-bold text-2xl">Top Artists</h2>
        <Link to="/top-artists">
          <p className="text-gray-300 text-base cursor-pointer">See more</p>
        </Link>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView="auto"
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[ FreeMode ]}
        className="mt-4"
      >
        {topPlays?.map((song, i) => (
          <SwiperSlide
            key={song?.id}
            style={{ width: '25%', height: 'auto' }}
            className="shadow-lg rounded-full animate-slideright"
          >
            <Link to={`/artists/${song?.artists[0].artist_id}`}>
              <img src={ data.result.thumbnail } alt="name" className="rounded-full w-full object-cover" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  </div>
)};

export default TopPlay;
