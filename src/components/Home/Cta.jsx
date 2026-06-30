import React from 'react'

const Cta = () => {

    const primaryBtn = "inline-flex items-center justify-center gap-2 bg-[#e50000] hover:bg-[#cc0000] text-white rounded-md px-[22px] py-[14px] text-[13px] font-semibold leading-none transition-colors cursor-pointer border-0";

  return (
    <section className="pb-[110px] pt-12">
        <div className="w-[min(1300px,calc(100%-40px))] mx-auto">
          <div className="relative overflow-hidden min-h-[228px] border border-[#262626] rounded-xl bg-[#141414]">
            {/* Poster mosaic background */}
            <div
              className="absolute inset-0 opacity-[0.62]"
              style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "4px" }}
            >
              <div className="bg-[#202020] overflow-hidden"><img src="https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg" alt="" className="w-full h-full object-cover block" /></div>
              <div className="bg-[#202020] overflow-hidden"><img src="https://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" alt="" className="w-full h-full object-cover block" /></div>
              <div className="bg-[#202020] overflow-hidden"><img src="https://image.tmdb.org/t/p/w300/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg" alt="" className="w-full h-full object-cover block" /></div>
              <div className="bg-[#202020] overflow-hidden"><img src="https://image.tmdb.org/t/p/w300/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" alt="" className="w-full h-full object-cover block" /></div>
              <div className="bg-[#202020] overflow-hidden"><img src="https://image.tmdb.org/t/p/w300/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt="" className="w-full h-full object-cover block" /></div>
              <div className="bg-[#202020] overflow-hidden"><img src="https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg" alt="" className="w-full h-full object-cover block" /></div>
              <div className="bg-[#202020] overflow-hidden"><img src="https://image.tmdb.org/t/p/w300/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg" alt="" className="w-full h-full object-cover block" /></div>
              <div className="bg-[#202020] overflow-hidden"><img src="https://image.tmdb.org/t/p/w300/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg" alt="" className="w-full h-full object-cover block" /></div>
              <div className="bg-[#202020] overflow-hidden"><img src="https://image.tmdb.org/t/p/w300/sv1xJUazXoKphN8DaGPJC14g2EK.jpg" alt="" className="w-full h-full object-cover block" /></div>
              <div className="bg-[#202020] overflow-hidden"><img src="https://image.tmdb.org/t/p/w300/6Wdl9N6dL0Hi5T4thkQnD3D7SoL.jpg" alt="" className="w-full h-full object-cover block" /></div>
              <div className="bg-[#202020] overflow-hidden"><img src="https://image.tmdb.org/t/p/w300/kuf6dutpsT0vSVehic3EZIqkOBt.jpg" alt="" className="w-full h-full object-cover block" /></div>
              <div className="bg-[#202020] overflow-hidden"><img src="https://image.tmdb.org/t/p/w300/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" alt="" className="w-full h-full object-cover block" /></div>
            </div>

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 z-[1] pointer-events-none"
              style={{
                background: `
                  linear-gradient(90deg, rgba(15,15,15,0.98) 0%, rgba(15,15,15,0.88) 42%, rgba(229,0,0,0.35) 100%),
                  linear-gradient(180deg, rgba(15,15,15,0.35) 0%, rgba(15,15,15,0.95) 100%)
                `,
              }}
            />

            {/* Content */}
            <div className="relative z-[2] min-h-[228px] px-[60px] flex flex-col sm:flex-row items-center justify-between gap-10 py-10 sm:py-0">
              <div>
                <h2 className="m-0 mb-[14px] text-white text-[30px] leading-[1.2] font-bold">Start your free trial today!</h2>
                <p className="m-0 max-w-[620px] text-[#999] text-[13px] leading-[1.65]">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
              </div>
              <button className={primaryBtn + " flex-shrink-0"}>Start a Free Trial</button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Cta