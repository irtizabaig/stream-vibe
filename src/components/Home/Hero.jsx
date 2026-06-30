import { Bell, Play, Search, X } from 'lucide-react'
import React, { useState } from 'react'
import Nav from '../Layout/Nav';
import logo from '../../assets/images/Abstract Design.png'


const Hero = () => {

    const primaryBtn = "inline-flex items-center justify-center gap-2 bg-[#e50000] hover:bg-[#cc0000] text-white rounded-md px-6 py-5 text-[16px] font-medium leading-none transition-colors cursor-pointer border-0";
  return (
    <section className="relative h-screen overflow-hidden bg-[#0f0f0f] md:min-h-[820px] sm:min-h-[720px]">


        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-[560px] opacity-[0.72] "
          style={{ display: "grid", gridTemplateColumns: "repeat(10,1fr)", gap: "20px" }}
        >

          {[
            "https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
            "https://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
            "https://image.tmdb.org/t/p/w300/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
            "https://image.tmdb.org/t/p/w300/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            "https://image.tmdb.org/t/p/w300/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            "https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
            "https://image.tmdb.org/t/p/w300/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
            "https://image.tmdb.org/t/p/w300/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
            "https://image.tmdb.org/t/p/w300/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
            "https://image.tmdb.org/t/p/w300/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
            "https://image.tmdb.org/t/p/w300/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
            "https://image.tmdb.org/t/p/w300/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
            "https://image.tmdb.org/t/p/w300/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
            "https://image.tmdb.org/t/p/w300/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
            "https://image.tmdb.org/t/p/w300/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
            "https://image.tmdb.org/t/p/w300/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg",
            "https://image.tmdb.org/t/p/w300/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg",
            "https://image.tmdb.org/t/p/w300/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg",
            "https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
            "https://image.tmdb.org/t/p/w300/rTh4K5uw9HypmpGslcKd4QfHl93.jpg",
            "https://image.tmdb.org/t/p/w300/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            "https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
            "https://image.tmdb.org/t/p/w300/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
            "https://image.tmdb.org/t/p/w300/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
            "https://image.tmdb.org/t/p/w300/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
            "https://image.tmdb.org/t/p/w300/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
            "https://image.tmdb.org/t/p/w300/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
            "https://image.tmdb.org/t/p/w300/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
            "https://image.tmdb.org/t/p/w300/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
            "https://image.tmdb.org/t/p/w300/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
            "https://image.tmdb.org/t/p/w300/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            "https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
            "https://image.tmdb.org/t/p/w300/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
            "https://image.tmdb.org/t/p/w300/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
            "https://image.tmdb.org/t/p/w300/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
            "https://image.tmdb.org/t/p/w300/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
            "https://image.tmdb.org/t/p/w300/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
            "https://image.tmdb.org/t/p/w300/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
            "https://image.tmdb.org/t/p/w300/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
            "https://image.tmdb.org/t/p/w300/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
          ].map((src, i) => (
            <div key={i} className="min-h-[200px] overflow-hidden rounded-lg bg-[#1a1a1a]">
              <img src={src} alt=""  className="w-full h-full object-cover block" />
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div 
  className="absolute inset-0 z-[1] pointer-events-none"
  style={{
    background: `
      /* 1. Top to Bottom Fade: Bottom ko 70% ke baad bilkul pure #0f0f0f kar diya hai taake niche wale section se smooth match ho */
      linear-gradient(180deg, rgba(15,15,15,0.2) 0%, rgba(15,15,15,0.5) 40%, #0f0f0f 75%, #0f0f0f 100%),
      
      /* 2. Left to Right Edges: Kinaro ko pure #0f0f0f me blend karne ke liye */
      linear-gradient(90deg, #0f0f0f 0%, rgba(15,15,15,0) 15%, rgba(15,15,15,0) 85%, #0f0f0f 100%),
      
      /* 3. Center Spotlight: Movies ko center me visible rakhne ke liye aur baki jagah smooth shadow dene ke liye */
      radial-gradient(circle at center 40%, rgba(15,15,15,0) 0%, rgba(15,15,15,0.4) 50%, #0f0f0f 95%)
    `
  }}
/>

  <Nav />

        {/* Decorative ring mark */}
        <div className="absolute top-[186px] left-1/2 -translate-x-1/2 z-[2] w-70 h-70 rounded-full flex items-center justify-center overflow-hidden" >
          
          <img src={logo} className='' />

        </div>

        {/* Hero content — centered container */}
        <div className="relative z-[3] w-[min(1300px,calc(100%-40px))] mx-auto pt-[69vh] text-center">
          <h1 className="m-0 mb-4 text-white font-semibold leading-[1.16] tracking-[-1.2px] text-[clamp(34px,5vw,55px)]">
            The Best Streaming Experience
          </h1>
          <p className="max-w-[800px] mx-auto mb-[30px] text-[#999] text-[16px] leading-[1.8]">
            StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
          </p>
          <button className={primaryBtn}>
            <Play size={20} fill="#fff" color="#fff" /> Start Watching Now
          </button>
        </div>
      </section>
  )
}

export default Hero