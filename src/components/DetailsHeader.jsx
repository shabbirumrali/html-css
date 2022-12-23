import { Link } from "react-router-dom";

const DetailsHeader = ({ data="", artist="" }) => {
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent-to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img alt="art" src={ data && data.result.thumbnail } className="sm:w-48 w-[170px] h-[170px] rounded-full overflow-hidden shadow-xl border-2 object-cover" />
        <div className="ml-5">
          <p className="text-white font-bold sm:text-3xl text-xl">{artist.name}</p>
          <Link to={`/artist/${artist.artist_id}`}>
            <p className="text-base text-gray-400 mt-2">{data && data.result.title}</p>
          </Link>
          <p className="text-gray-400 font-bold ">{data.result.year}</p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  )
};

export default DetailsHeader;
