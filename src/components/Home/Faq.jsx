import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'



const Faq = () => {

const [openFaq, setOpenFaq] = useState("01");

const primaryBtn = "inline-flex items-center justify-center gap-2 bg-[#e50000] hover:bg-[#cc0000] text-white rounded-md px-[22px] py-[14px] text-[16px] leading-none transition-colors cursor-pointer border-0";

const faqItem = (id) => `pb-5 border-b border-[rgba(229,0,0,0.35)] mb-[22px] cursor-pointer`;
const toggleFaq = (id) => setOpenFaq(openFaq === id ? null : id);

  return (
    <section className="w-full min-h-screen flex items-center py-[62px]">

        <div className="w-[min(1300px,calc(100%-40px))] mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[30px] mb-11">
            <div>
              <h2 className="m-0 mb-3 text-white lg:text-[40px] text-[30px] font-bold leading-[1.3]">Frequently Asked Questions</h2>
              <p className="mt-5 text-[#999] text-[16px] leading-[1.7] max-w-[1200px]">Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
            </div>
            <button className={primaryBtn + " flex-shrink-0"}>Ask a Question</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-11 mt-12">
            {/* Left column */}
            <div>
              {/* FAQ 01 */}
              <div className={faqItem("01")} onClick={() => toggleFaq("01")}>
                <div className="flex items-start gap-[18px]">
                  <span className="w-14 h-14 flex-shrink-0 rounded-md bg-[#1f1f1f] text-[#d6d6d6] inline-flex items-center justify-center text-[16px]">01</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-[15px] min-h-11 text-white text-[18px]">
                      <span>What is StreamVibe?</span>
                      {openFaq === "01" ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                    {openFaq === "01" && <p className="m-0 mr-9 mt-2 text-[#999] text-[16px] leading-[1.65]">StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>}
                  </div>
                </div>
              </div>

              {/* FAQ 02 */}
              <div className={faqItem("02")} onClick={() => toggleFaq("02")}>
                <div className="flex items-start gap-[18px]">
                  <span className="w-14 h-14 flex-shrink-0 rounded-md bg-[#1f1f1f] text-[#d6d6d6] inline-flex items-center justify-center text-[16px]">02</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-[15px] min-h-11 text-white text-[18px]">
                      <span>How much does StreamVibe cost?</span>
                      {openFaq === "02" ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                    {openFaq === "02" && <p className="m-0 mr-9 mt-2 text-[#999] text-[16px] leading-[1.65]">StreamVibe offers multiple subscription plans starting at $9.99/month. Choose the plan that fits your needs.</p>}
                  </div>
                </div>
              </div>

              {/* FAQ 03 */}
              <div className={faqItem("03")} onClick={() => toggleFaq("03")}>
                <div className="flex items-start gap-[18px]">
                  <span className="w-14 h-14 flex-shrink-0 rounded-md bg-[#1f1f1f] text-[#d6d6d6] inline-flex items-center justify-center text-[16px]">03</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-[15px] min-h-11 text-white text-[18px]">
                      <span>What content is available on StreamVibe?</span>
                      {openFaq === "03" ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                    {openFaq === "03" && <p className="m-0 mr-9 mt-2 text-[#999] text-[16px] leading-[1.65]">StreamVibe offers thousands of movies, TV shows, documentaries, and more from studios worldwide.</p>}
                  </div>
                </div>
              </div>

              {/* FAQ 04 */}
              <div className={faqItem("04")} onClick={() => toggleFaq("04")}>
                <div className="flex items-start gap-[18px]">
                  <span className="w-14 h-14 flex-shrink-0 rounded-md bg-[#1f1f1f] text-[#d6d6d6] inline-flex items-center justify-center text-[16px]">04</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-[15px] min-h-11 text-white text-[18px]">
                      <span>How can I watch StreamVibe?</span>
                      {openFaq === "04" ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                    {openFaq === "04" && <p className="m-0 mr-9 mt-2 text-[#999] text-[16px] leading-[1.65]">You can watch StreamVibe on any device including smartphones, tablets, smart TVs, laptops and gaming consoles.</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div>
              {/* FAQ 05 */}
              <div className={faqItem("05")} onClick={() => toggleFaq("05")}>
                <div className="flex items-start gap-[18px]">
                  <span className="w-14 h-14 flex-shrink-0 rounded-md bg-[#1f1f1f] text-[#d6d6d6] inline-flex items-center justify-center text-[16px]">05</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-[15px] min-h-11 text-white text-[18px]">
                      <span>How do I sign up for StreamVibe?</span>
                      {openFaq === "05" ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                    {openFaq === "05" && <p className="m-0 mr-9 mt-2 text-[#999] text-[16px] leading-[1.65]">Simply click the 'Start Free Trial' button, create an account, choose your plan, and start watching instantly.</p>}
                  </div>
                </div>
              </div>

              {/* FAQ 06 */}
              <div className={faqItem("06")} onClick={() => toggleFaq("06")}>
                <div className="flex items-start gap-[18px]">
                  <span className="w-14 h-14 flex-shrink-0 rounded-md bg-[#1f1f1f] text-[#d6d6d6] inline-flex items-center justify-center text-[16px]">06</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-[15px] min-h-11 text-white text-[18px]">
                      <span>What is the StreamVibe free trial?</span>
                      {openFaq === "06" ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                    {openFaq === "06" && <p className="m-0 mr-9 mt-2 text-[#999] text-[16px] leading-[1.65]">New users get a 30-day free trial with full access to all content. No credit card required to start.</p>}
                  </div>
                </div>
              </div>

              {/* FAQ 07 */}
              <div className={faqItem("07")} onClick={() => toggleFaq("07")}>
                <div className="flex items-start gap-[18px]">
                  <span className="w-14 h-14 flex-shrink-0 rounded-md bg-[#1f1f1f] text-[#d6d6d6] inline-flex items-center justify-center text-[16px]">07</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-[15px] min-h-11 text-white text-[18px]">
                      <span>How do I contact StreamVibe customer support?</span>
                      {openFaq === "07" ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                    {openFaq === "07" && <p className="m-0 mr-9 mt-2 text-[#999] text-[16px] leading-[1.65]">You can reach our support team 24/7 via the Help Center, live chat, or email at support@streamvibe.com.</p>}
                  </div>
                </div>
              </div>

              {/* FAQ 08 */}
              <div className={faqItem("08")} onClick={() => toggleFaq("08")}>
                <div className="flex items-start gap-[18px]">
                  <span className="w-14 h-14 flex-shrink-0 rounded-md bg-[#1f1f1f] text-[#d6d6d6] inline-flex items-center justify-center text-[16px]">08</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-[15px] min-h-11 text-white text-[18px]">
                      <span>What are the StreamVibe payment methods?</span>
                      {openFaq === "08" ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                    {openFaq === "08" && <p className="m-0 mr-9 mt-2 text-[#999] text-[16px] leading-[1.65]">We accept all major credit cards, PayPal, Apple Pay, and Google Pay for your subscription payments.</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </section>
  )
}

export default Faq