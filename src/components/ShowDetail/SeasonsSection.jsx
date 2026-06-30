import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Play } from "lucide-react";
import { getShowSeasons } from "../../Services/movieService";
import { IMAGE_BASE_URL } from "../../utils/constants";

const SeasonsSection = ({data, seasonsId}) => {

  const [activeSeason, setActiveSeason] = useState(0);
  const [episodes, setEpisodes] = useState([]);

  const fetchShowSeasons = async (seasonNumber)=>{
        const data = await getShowSeasons(seasonsId, seasonNumber)

        setEpisodes(data.episodes)
    }
useEffect(() => {
  if (data?.length > 0) {
    fetchShowSeasons(data[0].season_number);
  }
}, [data]);



  return (
    <div className="bg-[#14141c] p-5 rounded-xl space-y-4">

      {/* TITLE */}
      <h2 className="text-lg font-semibold mb-2">
        Seasons and Episodes
      </h2>

      {/* SEASONS */}
      {data?.map((e, index)=>{
        return <div key={e.id} className="bg-[#0f0f14] rounded-lg overflow-hidden">

          {/* SEASON HEADER */}
          <div 
          onClick={()=>{
              setActiveSeason(activeSeason === index ? -1 : index)
              fetchShowSeasons(e.season_number)
          }}
            className="flex justify-between items-center p-4 cursor-pointer"
          >
            <div>
              <p className="font-semibold">Season {index + 1}</p>
              <p className="text-xs text-gray-400">
                {e.episode_count} Episodes
              </p>
            </div>

            {activeSeason === index ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </div>

          {/* EPISODES */}
          {activeSeason === index && (
            episodes.map((e)=>{
                return <div key={e.id} className="px-4 pb-4 space-y-3">

              <div
                  className="flex gap-3 bg-[#1a1a22] p-3 rounded-lg"
                >

                  {/* IMAGE */}
                  <div className="w-[120px] h-[90px] bg-black rounded-md overflow-hidden flex items-center justify-center">
                    <img src={`${IMAGE_BASE_URL}${e.still_path}`} className="opacity-30 w-full h-full object-cover" />
                    <Play size={20} className="text-white z-10 absolute" />
                  </div>

                  {/* INFO */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-semibold">
                        {e.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        Episode {e.episode_number}
                      </p>
                    </div>

                    <p className="text-xs text-gray-400 mt-3">
                      {e.overview}
                    </p>
                  </div>

                </div>

            </div>
            })
          )}
        </div>
      })}
    </div>
  );
};

export default SeasonsSection;