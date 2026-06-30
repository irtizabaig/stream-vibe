import React from 'react'

const Devices = () => {
  return (
    <section className="pt-10 pb-[74px] w-full lg:h-screen flex items-center">
        <div className="w-[min(1300px,calc(100%-40px))] mx-auto">
          <div>
            <h2 className="m-0 mb-3 text-white lg:text-[40px] text-[30px] font-bold leading-[1.3]">We Provide you streaming experience across various devices.</h2>
            <p className="mt-5 text-[#999] text-[16px] leading-[1.7] max-w-[1200px]">
              With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Smartphones */}
            <div
              className="min-h-[184px] p-[34px] border border-[#262626] rounded-[10px]"
              style={{ background: "radial-gradient(circle at top right, rgba(229,0,0,0.18), rgba(229,0,0,0) 45%), #141414" }}
            >
              <h3 className="m-0 mb-[18px] flex items-center gap-[14px] text-[18px] font-semibold leading-none text-white">
                <span className="w-14 h-14 rounded-lg inline-flex items-center justify-center text-[19px] border border-[#262626] bg-[rgba(15,15,15,0.86)] backdrop-blur-[10px]">📱</span>
                Smartphones
              </h3>
              <p className="m-0 text-[#999] text-[16px] leading-[1.65]">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.</p>
            </div>

            {/* Tablet */}
            <div
              className="min-h-[184px] p-[34px] border border-[#262626] rounded-[10px]"
              style={{ background: "radial-gradient(circle at top right, rgba(229,0,0,0.18), rgba(229,0,0,0) 45%), #141414" }}
            >
              <h3 className="m-0 mb-[18px] flex items-center gap-[14px] text-[18px] font-semibold leading-none text-white">
                <span className="w-14 h-14 rounded-lg inline-flex items-center justify-center text-[19px] border border-[#262626] bg-[rgba(15,15,15,0.86)] backdrop-blur-[10px]">📟</span>
                Tablet
              </h3>
              <p className="m-0 text-[#999] text-[16px] leading-[1.65]">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.</p>
            </div>

            {/* Smart TV */}
            <div
              className="min-h-[184px] p-[34px] border border-[#262626] rounded-[10px]"
              style={{ background: "radial-gradient(circle at top right, rgba(229,0,0,0.18), rgba(229,0,0,0) 45%), #141414" }}
            >
              <h3 className="m-0 mb-[18px] flex items-center gap-[14px] text-[18px] font-semibold leading-none text-white">
                <span className="w-14 h-14 rounded-lg inline-flex items-center justify-center text-[19px] border border-[#262626] bg-[rgba(15,15,15,0.86)] backdrop-blur-[10px]">📺</span>
                Smart TV
              </h3>
              <p className="m-0 text-[#999] text-[16px] leading-[1.65]">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.</p>
            </div>

            {/* Laptops */}
            <div
              className="min-h-[184px] p-[34px] border border-[#262626] rounded-[10px]"
              style={{ background: "radial-gradient(circle at top right, rgba(229,0,0,0.18), rgba(229,0,0,0) 45%), #141414" }}
            >
              <h3 className="m-0 mb-[18px] flex items-center gap-[14px] text-[18px] font-semibold leading-none text-white">
                <span className="w-14 h-14 rounded-lg inline-flex items-center justify-center text-[19px] border border-[#262626] bg-[rgba(15,15,15,0.86)] backdrop-blur-[10px]">💻</span>
                Laptops
              </h3>
              <p className="m-0 text-[#999] text-[16px] leading-[1.65]">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.</p>
            </div>

            {/* Gaming Consoles */}
            <div
              className="min-h-[184px] p-[34px] border border-[#262626] rounded-[10px]"
              style={{ background: "radial-gradient(circle at top right, rgba(229,0,0,0.18), rgba(229,0,0,0) 45%), #141414" }}
            >
              <h3 className="m-0 mb-[18px] flex items-center gap-[14px] text-[18px] font-semibold leading-none text-white">
                <span className="w-14 h-14 rounded-lg inline-flex items-center justify-center text-[19px] border border-[#262626] bg-[rgba(15,15,15,0.86)] backdrop-blur-[10px]">🎮</span>
                Gaming Consoles
              </h3>
              <p className="m-0 text-[#999] text-[16px] leading-[1.65]">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.</p>
            </div>

            {/* VR Headsets */}
            <div
              className="min-h-[184px] p-[34px] border border-[#262626] rounded-[10px]"
              style={{ background: "radial-gradient(circle at top right, rgba(229,0,0,0.18), rgba(229,0,0,0) 45%), #141414" }}
            >
              <h3 className="m-0 mb-[18px] flex items-center gap-[14px] text-[18px] font-semibold leading-none text-white">
                <span className="w-14 h-14 rounded-lg inline-flex items-center justify-center text-[19px] border border-[#262626] bg-[rgba(15,15,15,0.86)] backdrop-blur-[10px]">🥽</span>
                VR Headsets
              </h3>
              <p className="m-0 text-[#999] text-[16px] leading-[1.65]">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.</p>
            </div>

          </div>
        </div>
      </section>
  )
}

export default Devices