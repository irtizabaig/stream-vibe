import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Mic, Play, Plus, Speaker, SpeakerIcon, ThumbsUp } from "lucide-react";
import { BsSoundwave } from "react-icons/bs";
import { ORIGINAL_IMAGE_URL } from "../../utils/constants";



export default function HeroSlider({data}) {

  return (
    
        <div className="w-full min-h-screen flex items-center pt-20 justify-center">

        <div className="lg:w-[80%] lg:h-[80vh] h-[60vh] lg:rounded-3xl overflow-hidden">

        <Swiper
        id="hero"
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2000 }}
        loop
        className="w-full h-full"
      >

        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full">
              
              {/* Background Image */}
              <img
                src={`${ORIGINAL_IMAGE_URL}${item.poster_path}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {item.title}
                </h1>

                <p className="max-w-2xl text-sm md:text-base text-gray-300 mb-6">
                  {item.overview}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4">
            
                  <button className="rounded-full border border-gray-400 bg-black p-3"> <Plus size={25} /> </button>
                  <button className="rounded-full border border-gray-400 bg-black p-3"> <ThumbsUp size={25} /> </button>
                  <button className="rounded-full border border-gray-400 bg-black p-3"> <BsSoundwave size={25} /> </button>

                </div>
                <button className="bg-red-600 mt-5 hover:bg-red-700 px-8 py-4 rounded-full flex items-center gap-2">
                    <Play fill="white" size={25} /> Play Now
                  </button>
              </div>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>

        </div>

        </div>
    
  );
}