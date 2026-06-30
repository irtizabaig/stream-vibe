import React, { useEffect, useRef, useState } from 'react'
import { getShowCasts, getShowDetails } from '../Services/movieService'
import { useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SeasonsSection from '../components/ShowDetail/SeasonsSection'
import Nav from '../components/Layout/Nav'
import Footer from '../components/Layout/Footer'
import { IMAGE_BASE_URL, ORIGINAL_IMAGE_URL } from '../utils/constants'

const ShowDetail = () => {

  const [details, setDetails] = useState({})
  const [casts, setCasts] = useState([])
  const {id} = useParams()

  const swiperRef = useRef(null)

  useEffect(() => {
    const fetchShowDetails = async ()=>{
      const data = await getShowDetails(id)
      setDetails(data)

      const cast = await getShowCasts(id)
      setCasts(cast.cast)
      
    }
    fetchShowDetails()
  }, [])

  return (
    <div className="bg-[#0b0b0f] text-white min-h-screen pt-30">

      <Nav />

      {/* HERO */}
      <div className="lg:w-[1300px] relative lg:h-[85vh] h-[60vh] mx-auto">

        <img
          src={`${ORIGINAL_IMAGE_URL}${details.backdrop_path}`}
          className="absolute w-full h-full lg:rounded-2xl object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r lg:rounded-2xl from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-16">

          <h1 className="text-5xl font-bold mb-3">
            {details.name}
          </h1>

          <p className="max-w-xl text-gray-300 text-sm mb-6">
            {details.overview}
          </p>

          <button className="flex items-center gap-2 bg-red-600 px-5 py-2 rounded-md w-fit">
            <Play size={18} /> Play Now
          </button>

        </div>
      </div>

      {/* MAIN GRID */}
      <div className="lg:w-[1300px] mx-auto py-10 grid grid-cols-3 gap-5 px-2">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 col-span-3 space-y-8">

          {/* SEASONS */}
          <SeasonsSection data={details.seasons} seasonsId={id} />

          {/* CAST (STATIC SWIPER) */}
          <div className="bg-[#14141c] p-5 rounded-xl">

         {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Cast</h2>
        </div>

        <div className="flex gap-2 items-center justify-end mb-5">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="p-2 bg-white/10 rounded-md"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="p-2 bg-white/10 rounded-md"
      >
        <ChevronRight />
      </button>
    </div>

        {/* SWIPER */}
        <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={10}
            slidesPerView={8}
            navigation
        >

    {casts.map((e)=>{
      return <SwiperSlide key={e.id}>
      <div className="text-center min-w-[80px]">
        <img
          className="lg:w-16 lg:h-16 h-12 w-12 rounded-full object-cover mx-auto"
          src={`${IMAGE_BASE_URL}${e.profile_path}`}
          onError={(e)=> e.target.style.display = 'none'}
        />
        <p className="text-xs mt-2 text-gray-300">{e.name.split(' ')[0]}</p>
      </div>
    </SwiperSlide>
    })}

  </Swiper>
            </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-1 col-span-3 space-y-5">

          <div className="bg-[#14141c] p-5 rounded-xl">
            <p className="text-gray-400 text-sm">Released Year</p>
            <p>{details.first_air_date?.split('-')[0]}</p>
          </div>

          <div className="bg-[#14141c] p-5 rounded-xl">
            <p className="text-gray-400 text-sm">Rating</p>
            <div className="flex items-center gap-1 text-yellow-400 mt-1">
              <Star size={16} /> {Math.round(details.vote_average)}
            </div>
          </div>

          <div className="bg-[#14141c] p-5 rounded-xl">
            <p className="text-gray-400 text-sm">Languages</p>

            <div className="flex gap-2 flex-wrap mt-2">
              {details.spoken_languages?.map((e, idx)=>{
                return <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded">{e.english_name}</span>
              })}
              
              
            </div>

          </div>

          <div className="bg-[#14141c] p-5 rounded-xl">
            <p className="text-gray-400 text-sm">Genres</p>

            <div className="flex gap-2 flex-wrap mt-2">
              {details.genres?.map((e)=>{
                return <span key={e.id} className="text-xs bg-white/10 px-2 py-1 rounded">{e.name}</span>
              })}
              
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default ShowDetail