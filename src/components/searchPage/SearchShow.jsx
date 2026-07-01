import { ChevronRight } from 'lucide-react'
import React from 'react'
import { ORIGINAL_IMAGE_URL } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'

const SearchShow = ({data}) => {

    const navigate = useNavigate()

  return (
    <div 
    onClick={()=>navigate(`/show-detail/${data.id}`)}
    className="border border-[#262626] rounded-[10px] bg-[#1a1a1a] p-5 lg:min-h-[280px] lg:w-[250px] lg:w-70 w-45 h-70 flex flex-col justify-between overflow-hidden hover:border-[rgba(229,0,0,0.72)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">

      <div className="mb-5 h-[180px] relative after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:from-[30%] after:to-[#1a1a1a] after:pointer-events-none">
        <div className="w-full h-full rounded-[5px] overflow-hidden bg-[#242424]">
          <img
            src={`${ORIGINAL_IMAGE_URL}${data.poster_path}`}
            loading="lazy"
            onError={(e) => (e.target.style.display = "none")}
            className="w-full h-full object-cover block"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-[10px] text-white lg:text-[16px] text-[13px] font-semibold">
        <span>{data.name}</span>
        <ChevronRight size={16} />
      </div>

    </div>
  )
}

export default SearchShow