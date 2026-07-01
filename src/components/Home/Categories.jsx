import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IMAGE_BASE_URL } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

const Categories = ({genres, loading, error, type}) => {

  const navigate = useNavigate()
  
  return (
    <section className="w-full h-screen flex items-center py-[72px]">

        <div className=" w-[min(1300px,calc(100%-40px))] mx-auto">

          <div className="flex items-end justify-between gap-[30px] mb-20">

            <div>
              <h2 className="m-0 mb-3 text-white lg:text-[40px] text-[30px] font-bold leading-[1.3]">Explore our wide variety of categories</h2>
              <p className="mt-5 text-[#999] text-[16px] leading-[1.7] max-w-[1000px]">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new.</p>
            </div>

            <div className="hidden sm:flex items-center gap-3 p-3 border border-[#1f1f1f] bg-[#0f0f0f] rounded-[10px] flex-shrink-0">
              <button className="sv-cat-btn-prev w-[42px] h-[42px] rounded-lg border border-[#262626] bg-[#1a1a1a] text-white inline-flex items-center justify-center cursor-pointer" aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <div className="w-[60px] h-1 rounded-full bg-[#333] overflow-hidden">
                <span className="block w-[36%] h-full rounded-full bg-[#e50000]" />
              </div>
              <button className="sv-cat-btn-next w-[42px] h-[42px] rounded-lg border border-[#262626] bg-[#1a1a1a] text-white inline-flex items-center justify-center cursor-pointer" aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>

          </div>

          <div className="[&_.swiper]:overflow-visible">

            <Swiper 
            className='[&_.swiper-wrapper]:pt-2 [&_.swiper-wrapper]:pb-2'
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={5}
              navigation={{ prevEl: ".sv-cat-btn-prev", nextEl: ".sv-cat-btn-next" }}
              breakpoints={{
                320: { slidesPerView: 1.35, spaceBetween: 16 },
                560: { slidesPerView: 2.4, spaceBetween: 18 },
                768: { slidesPerView: 3.3, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 24 },
              }}
            >
              
              {loading ? (
                <h1 className='text-white'>Loading..</h1>
              ) : error ? (
                <h1>{error}</h1>
              ) : genres.map((genre)=>{
                return <SwiperSlide key={genre.id}>
                <div 
                onClick={()=> navigate(`/genre?genre=${genre.id}&type=${type}`)}
                className="border border-[#262626] rounded-[10px] bg-[#1a1a1a] p-5 min-h-[280px] flex flex-col justify-between overflow-hidden hover:border-[rgba(229,0,0,0.72)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">

                  <div className="grid grid-cols-2 gap-1 mb-5 min-h-[180px] relative after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:from-[30%] after:to-[#1a1a1a] after:pointer-events-none">

                    {genre.movies?.map((movie)=>{
                      return <div key={movie.id} className="h-[90px] rounded-[5px] overflow-hidden bg-[#242424]"><img 
                      alt={movie.title}
                      loading="lazy"
                      src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                      onError={(e)=>{
                        e.target.style.display = "none"
                      }}
                      className="w-full h-full object-cover block" /></div>
                    })}

                  </div>

                  <div className="flex items-center justify-between gap-[10px] text-white text-[16px] font-semibold"><span>{genre.name}</span><ChevronRight size={16} /></div>

                </div>

              </SwiperSlide>
              })}

              
            </Swiper>

          </div>

        </div>

      </section>
  )
}

export default Categories