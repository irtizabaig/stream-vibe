import React, { useState } from 'react'

const Plan = () => {

    const [billing, setBilling] = useState("monthly");

  return (
    <section className="py-[70px] w-full lg:h-[90vh] flex items-center">

        <div className="w-[min(1300px,calc(100%-40px))] mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[30px] mb-11">

            <div>
              <h2 className="m-0 mb-3 text-white lg:text-[40px] text-[30px] font-bold leading-[1.3]">Choose the plan that's right for you</h2>
              <p className="mt-5 text-[#999] text-[16px] leading-[1.7] max-w-[1200px]">Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
            </div>

            <div className="flex-shrink-0 inline-flex p-2 border justify-center border-[#262626] rounded-lg bg-[#0f0f0f]">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-5 py-[11px] rounded-md text-[14px] cursor-pointer border-0 font-['Inter',sans-serif] transition-colors ${billing === "monthly" ? "bg-[#1f1f1f] text-white" : "bg-transparent text-[#999]"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`px-5 py-[11px] rounded-md text-[14px] cursor-pointer border-0 font-['Inter',sans-serif] transition-colors ${billing === "yearly" ? "bg-[#1f1f1f] text-white" : "bg-transparent text-[#999]"}`}
              >
                Yearly
              </button>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[46px]">
            {/* Basic Plan */}
            <div className="p-[34px] border border-[#262626] rounded-[10px] bg-[#1a1a1a]">

              <h3 className="m-0 mb-[14px] text-white text-[20px] font-bold">Basic Plan</h3>
              <p className="min-h-[66px] m-0 mb-8 text-[#999] text-[16px] leading-[1.65]">Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
              
              <div className="mb-[30px]">
                <strong className="text-white text-[30px] leading-none font-bold">${billing === "yearly" ? "99.90" : "9.99"}</strong>
                <span className="text-[#999] text-[13px]">/{billing === "yearly" ? "year" : "month"}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="h-11 border border-[#262626] rounded-md bg-[#141414] text-white font-['Inter',sans-serif] text-[13px] font-semibold cursor-pointer hover:bg-[#1f1f1f] transition-colors">Start Free Trial</button>
                <button className="h-11 border-0 rounded-md bg-[#e50000] text-white font-['Inter',sans-serif] text-[13px] font-semibold cursor-pointer hover:bg-[#cc0000] transition-colors">Choose Plan</button>
              </div>

            </div>

            {/* Standard Plan — highlighted */}
            <div className="p-[34px] border border-[rgba(229,0,0,0.72)] rounded-[10px] bg-[#1a1a1a]">
              <h3 className="m-0 mb-[14px] text-white text-[20px] font-bold">Standard Plan</h3>
              <p className="min-h-[66px] m-0 mb-8 text-[#999] text-[16px] leading-[1.65]">Access to a wider selection of movies and shows, including most new releases and exclusive content.</p>
              <div className="mb-[30px]">
                <strong className="text-white text-[30px] leading-none font-bold">${billing === "yearly" ? "129.90" : "12.99"}</strong>
                <span className="text-[#999] text-[13px]">/{billing === "yearly" ? "year" : "month"}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="h-11 border border-[#262626] rounded-md bg-[#141414] text-white font-['Inter',sans-serif] text-[13px] font-semibold cursor-pointer hover:bg-[#1f1f1f] transition-colors">Start Free Trial</button>
                <button className="h-11 border-0 rounded-md bg-[#e50000] text-white font-['Inter',sans-serif] text-[13px] font-semibold cursor-pointer hover:bg-[#cc0000] transition-colors">Choose Plan</button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="p-[34px] border border-[#262626] rounded-[10px] bg-[#1a1a1a]">
              <h3 className="m-0 mb-[14px] text-white text-[20px] font-bold">Premium Plan</h3>
              <p className="min-h-[66px] m-0 mb-8 text-[#999] text-[16px] leading-[1.65]">Access to the widest selection of movies and shows, including all new releases and Offline Viewing.</p>
              <div className="mb-[30px]">
                <strong className="text-white text-[30px] leading-none font-bold">${billing === "yearly" ? "149.90" : "14.99"}</strong>
                <span className="text-[#999] text-[13px]">/{billing === "yearly" ? "year" : "month"}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="h-11 border border-[#262626] rounded-md bg-[#141414] text-white font-['Inter',sans-serif] text-[13px] font-semibold cursor-pointer hover:bg-[#1f1f1f] transition-colors">Start Free Trial</button>
                <button className="h-11 border-0 rounded-md bg-[#e50000] text-white font-['Inter',sans-serif] text-[13px] font-semibold cursor-pointer hover:bg-[#cc0000] transition-colors">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>

      </section>
  )
}

export default Plan