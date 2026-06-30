import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGE_BASE_URL } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'

const OurGenre = ({data, MovieLoading, showsLoading, error, type}) => {

    const prevRef = useRef(null)
    const nextRef = useRef(null)

    const navigate = useNavigate()

  return (

      <div className="w-[min(1300px,calc(100%-40px))] mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between gap-[30px] mb-10">

            <h1 className='text-3xl'>Our Genre</h1>

          {/* Navigation */}
          <div className="hidden sm:flex items-center gap-3 p-3 border border-[#1f1f1f] bg-[#0f0f0f] rounded-[10px] flex-shrink-0">

            <button ref={prevRef} className="cursor-pointer sv-cat-btn-prev w-[42px] h-[42px] rounded-lg border border-[#262626] bg-[#1a1a1a] text-white flex items-center justify-center">
              <ChevronLeft size={18} />
            </button>

            <div className="w-[60px] h-1 rounded-full bg-[#333] overflow-hidden">
              <span className="block w-[36%] h-full bg-red-600 rounded-full"></span>
            </div>

            <button ref={nextRef} className="cursor-pointer sv-cat-btn-next w-[42px] h-[42px] rounded-lg border border-[#262626] bg-[#1a1a1a] text-white flex items-center justify-center">
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 16 },
            560: { slidesPerView: 2.2, spaceBetween: 18 },
            768: { slidesPerView: 3.2, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 24 },
          }}
        >

          {MovieLoading ? (
            <h1>Loading.......</h1>
          ) : showsLoading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>{error}</h1>
          ) : data.map((e)=>{
            return <SwiperSlide key={e.id}>
            <div onClick={()=> navigate(`/genre?genre=${e.id}&type=${type}`) } className="border border-[#262626] rounded-[10px] bg-[#1a1a1a] p-5 min-h-[280px] flex flex-col justify-between">

              <div className="grid grid-cols-2 gap-1 mb-5 min-h-[180px]">

                {e.movie?.map((movie)=>{
                  return <div key={movie.id} className="h-[90px] bg-[#242424] rounded overflow-hidden">
                  <img className='w-full h-full object-cover' src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="" />
                </div>
                })}

                {e.shows?.map((show)=>{
                  return <div key={show.id} className="h-[90px] bg-[#242424] rounded overflow-hidden">
                  <img className='w-full h-full object-cover' src={`${IMAGE_BASE_URL}${show.poster_path}`} alt="" />
                </div>
                })}

              </div>

              <div className="flex items-center justify-between text-white font-semibold">
                <span>{e.name}</span>
                <ChevronRight size={16} />
              </div>

            </div>
          </SwiperSlide>
          })}


        </Swiper>

      </div>
  )
}

export default OurGenre