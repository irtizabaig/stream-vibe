import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f] pt-[70px] pb-[34px]">
        <div className="w-[min(1300px,calc(100%-40px))] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-14 pb-[62px]">
            {/* Home */}
            <div>
              <h4 className="m-0 mb-[22px] text-white text-[13px] font-semibold">Home</h4>
              <ul className="list-none m-0 p-0">
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Categories</a></li>
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Devices</a></li>
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Pricing</a></li>
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Movies */}
            <div>
              <h4 className="m-0 mb-[22px] text-white text-[13px] font-semibold">Movies</h4>
              <ul className="list-none m-0 p-0">
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Genres</a></li>
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Trending</a></li>
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">New Release</a></li>
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Popular</a></li>
              </ul>
            </div>

            {/* Shows */}
            <div>
              <h4 className="m-0 mb-[22px] text-white text-[13px] font-semibold">Shows</h4>
              <ul className="list-none m-0 p-0">
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Genres</a></li>
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Trending</a></li>
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">New Release</a></li>
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Popular</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="m-0 mb-[22px] text-white text-[13px] font-semibold">Support</h4>
              <ul className="list-none m-0 p-0">
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Subscription */}
            <div>
              <h4 className="m-0 mb-[22px] text-white text-[13px] font-semibold">Subscription</h4>
              <ul className="list-none m-0 p-0">
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Plans</a></li>
                <li className="mb-[13px]"><a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Features</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="m-0 mb-[22px] text-white text-[13px] font-semibold">Connect With Us</h4>
              <div className="flex gap-[10px]">
                <button className="w-9 h-9 rounded-md border border-[#262626] bg-[#1a1a1a] text-white inline-flex items-center justify-center cursor-pointer hover:bg-[#262626] transition-colors" aria-label="Facebook">
                  <FaFacebookF size={14} />
                </button>
                <button className="w-9 h-9 rounded-md border border-[#262626] bg-[#1a1a1a] text-white inline-flex items-center justify-center cursor-pointer hover:bg-[#262626] transition-colors" aria-label="Twitter">
                  <FaTwitter size={14} />
                </button>
                <button className="w-9 h-9 rounded-md border border-[#262626] bg-[#1a1a1a] text-white inline-flex items-center justify-center cursor-pointer hover:bg-[#262626] transition-colors" aria-label="LinkedIn">
                  <FaLinkedinIn size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-[#262626] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[30px]">
            <p className="m-0 text-[#999] text-[12px]">©2023 streamvibe, All Rights Reserved</p>
            <div className="flex gap-[30px]">
              <a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Terms of Use</a>
              <a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#999] hover:text-white text-[12px] no-underline transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer