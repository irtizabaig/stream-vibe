import React, { useEffect, useRef, useState } from "react";
import {
  Play,
  Plus,
  ThumbsUp,
  Volume2,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Cta from "../components/Home/Cta";
import { useParams } from "react-router-dom";
import { getMovieCasts, getMovieDetails } from "../Services/movieService";
import { IMAGE_BASE_URL, ORIGINAL_IMAGE_URL } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";

const MovieDetail = () => {

    const [details, setDetails] = useState({})
    const [casts, setCasts] = useState([])
    const {id} = useParams()
    useEffect(() => {
      const fetMovieDetails = async ()=>{

        const data = await getMovieDetails(id)
        setDetails(data)

        const data2 = await getMovieCasts(id)
        setCasts(data2.cast)
        
      }
      fetMovieDetails()
    }, [])

    const swiperRef = useRef(null)


    const testimonials = [
  {
    name: "Ali Hassan",
    description: "Amazing platform! UI is very smooth and easy to use. I really enjoyed the experience.",
    rating: 4.8,
  },
  {
    name: "Sara Khan",
    description: "Great movie streaming app. Everything loads fast and design feels premium and modern.",
    rating: 4.6,
  },
];

  return (
    <div className="bg-[#0b0b0f] w-full text-white min-h-screen pt-30">

      <Nav />

      {/* HERO */}
      <div className="relative lg:w-[1300px] mx-auto lg:h-[85vh] h-[60vh]">
        <img
          src={`${ORIGINAL_IMAGE_URL}${details.backdrop_path}`}
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

        <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-16">

          <h1 className="text-5xl font-bold mb-3">{details.title}</h1>

          <p className="max-w-xl text-gray-300 text-base mb-6">
            {details.overview}
          </p>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-red-600 px-5 py-2 rounded-md font-semibold">
              <Play size={18} /> Play Now
            </button>

            <button className="p-2 bg-white/10 rounded-md">
              <Plus size={18} />
            </button>

            <button className="p-2 bg-white/10 rounded-md">
              <ThumbsUp size={18} />
            </button>

            <button className="p-2 bg-white/10 rounded-md">
              <Volume2 size={18} />
            </button>
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="py-10 grid grid-cols-3 lg:w-[1300px] mx-auto gap-8 px-2">

        {/* LEFT */}
        <div className="lg:col-span-2 col-span-3 space-y-8">

          {/* DESCRIPTION */}
          <div className="bg-[#14141c] p-5 rounded-xl">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-400 text-base">
              {details.overview}
            </p>
          </div>

          {/* CAST */}
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
        return <SwiperSlide>
      <div className="text-center min-w-[80px]">
        <img
          className="lg:w-16 lg:h-16 w-12 h-12 rounded-full object-cover mx-auto"
          src={`${IMAGE_BASE_URL}${e.profile_path}`}
          onError={(e)=> e.target.style.display = 'none'}
        />
        <p className="text-xs mt-2 text-gray-300">{e.name.split(' ')[0]}</p>
      </div>
    </SwiperSlide>
    })}


  </Swiper>
            </div>

          {/* REVIEWS */}
          <div className="bg-[#14141c] lg:p-5 p-3 rounded-xl">

            <h2 className="text-lg font-semibold mb-4">Reviews</h2>

            <div className="grid grid-cols-2 gap-4">

              {testimonials.map((e, idx)=>{
                return <div key={idx} className="bg-[#0f0f14] p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h3 className="text-sm font-semibold">{e.name}</h3>
                  <div className="flex items-center text-yellow-400">
                    <Star size={14} /> {e.rating}
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  {e.description}
                </p>
              </div>
              })}

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-1 col-span-3 space-y-5">

          <div className="bg-[#14141c] p-5 rounded-xl">
            <p className="text-gray-400 text-sm">Released Year</p>
            <p className="font-semibold">{details.release_date?.split('-')[0]}</p>
          </div>

          <div className="bg-[#14141c] p-5 rounded-xl">
            <p className="text-gray-400 text-sm mb-2">Languages</p>
            <div className="flex gap-2 flex-wrap">
              {details?.spoken_languages?.map((e, idx)=>{
                return <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded">{e.english_name}</span>
              })}
            </div>
          </div>

          <div className="bg-[#14141c] p-5 rounded-xl">
            <p className="text-gray-400 text-sm">Ratings</p>

            <div className="flex justify-between mt-2 text-sm">
              <span>IMDb</span>
              <span className="text-yellow-400">{Math.round(details.vote_average)}</span>
            </div>
          </div>

          <div className="bg-[#14141c] p-5 rounded-xl">
            <p className="text-gray-400 text-sm">Genres</p>

            <div className="flex gap-2 mt-2 flex-wrap">
              {details?.genres?.map((e)=>{
                return <span key={e.id} className="text-xs bg-white/10 px-2 py-1 rounded">{e.name}</span>
              })}
            </div>
          </div>

        </div>
      </div>

        <Cta />
          
        <Footer />
    </div>
  )
}

export default MovieDetail