import { ChevronRight, X } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getSearchMovies, getSearchTVShows } from "../Services/movieService"
import SearchMovie from "../components/searchPage/SearchMovie"
import SearchShow from "../components/searchPage/SearchShow"


const SearchPage = () => {

    const navigate = useNavigate()

    const [searchData, setsearchData] = useState('')
    const [searchMovie, setsearchMovie] = useState([])
    const [searchShow, setsearchShow] = useState([])

    useEffect(() => {
    
    const fetchSearchData = async ()=>{
        const movieData = await getSearchMovies(searchData.toLowerCase())
        const showDdata = await getSearchTVShows(searchData.toLowerCase())
        setsearchMovie(movieData)
        setsearchShow(showDdata)
    }
    fetchSearchData()
    }, [searchData])

  return (
    <div className='w-full min-h-screen bg-black relative lg:p-10 p-5 flex flex-col gap-10'>

        <div className="w-full h-30 flex items-center justify-between">

        <input 
        value={searchData}
        onChange={(e)=>{
            setsearchData(e.target.value)
        }}
        className='py-3 px-5 w-[60%] text-2xl border-white z-[9] border-2 rounded-full outline-none text-white' type="text" placeholder='Searching' />

        <button className='cursor-pointer text-white' onClick={()=> navigate(-1)} > <X size={40} /> </button>

        </div>

        {/* ------------------------------------ */}

        <h1 className='text-3xl text-white'>Movies</h1>
        <div className="w-full h-full flex lg:gap-5 gap-3 flex-wrap p-3">

            {searchMovie.map((e)=>{
            return <SearchMovie key={e.id} data={e} />
        })}
        </div>


        <h1 className='text-3xl text-white'>Shows</h1>
        <div className="w-full h-full flex lg:gap-5 gap-3 flex-wrap p-3">

        {searchShow.map((e)=>{
            return <SearchShow key={e.id} data={e} />
        })}
        </div>

    </div>
  )
}

export default SearchPage