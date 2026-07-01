import { ChevronLeft, ChevronRight, Clock, Eye } from 'lucide-react'
import React, { useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGE_BASE_URL } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'

const TrendingNow = ({data, type}) => {

    const prevRef = useRef(null)
    const nextRef = useRef(null)
    
    const navigate = useNavigate()

  return (
    <div className="w-[min(1300px,calc(100%-40px))] mx-auto mt-10">

        {/* Header */}
        <div className="flex items-center justify-between gap-[30px] mb-10">

            <h1 className='text-3xl'>Trending Now</h1>

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

          {type === 'movie' ? data.map((movie)=>{
            return <SwiperSlide key={movie.id}>
            <div onClick={()=> navigate(`/movie-detail/${movie.id}`)} className="border border-[#262626] rounded-[10px] bg-[#1a1a1a] p-5 min-h-[280px] flex flex-col justify-between">

              <div className="mb-5 min-h-[180px]">
                <div className="h-[180px] bg-[#242424] rounded overflow-hidden">
                  <img className='w-full h-full object-cover' src={`${IMAGE_BASE_URL}${movie.poster_path}`} loading="lazy" onError={(e)=> e.target.style.display = 'none'} />
                </div>
              </div>

              <div className="flex items-center justify-between text-white font-semibold">
                
                <div className='flex gap-1 border rounded-full py-1 px-2'>
                     <Clock fill='gray' size={18} />
                     <p className='text-sm font-light'>1h</p>
                </div>

                <div className='flex gap-1 border rounded-full py-1 px-2'>
                     <Eye fill='gray' size={18} />
                     <p className='text-sm font-light'>{Math.round(movie.popularity)}k</p>
                </div>
                
              </div>

            </div>
          </SwiperSlide>
          }) : type === 'show' ? data.map((show)=>{
            return <SwiperSlide key={show.id}>
            <div onClick={()=> navigate(`/show-detail/${show.id}`)}
             className="border border-[#262626] rounded-[10px] bg-[#1a1a1a] p-5 min-h-[280px] flex flex-col justify-between">

              <div className="mb-5 min-h-[180px]">
                <div className="h-[180px] bg-[#242424] rounded overflow-hidden">
                  <img className='w-full h-full object-cover' src={`${IMAGE_BASE_URL}${show.poster_path}`} loading="lazy" onError={(e)=> e.target.style.display = 'none'} />
                </div>
              </div>

              <div className="flex items-center justify-between text-white font-semibold">
                
                <div className='flex gap-1 border rounded-full py-1 px-2'>
                     <Clock fill='gray' size={18} />
                     <p className='text-sm font-light'>1h</p>
                </div>

                <div className='flex gap-1 border rounded-full py-1 px-2'>
                     <Eye fill='gray' size={18} />
                     <p className='text-sm font-light'>{Math.round(show.popularity)}k</p>
                </div>
                
              </div>

            </div>
          </SwiperSlide>
          }) : null}
       

        </Swiper>

      </div>
  )
}

export default TrendingNow