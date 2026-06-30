import { useEffect, useState } from "react";
import Categories from "../components/Home/Categories";
import Cta from "../components/Home/Cta";
import Devices from "../components/Home/Devices";
import Faq from "../components/Home/Faq";
import Hero from "../components/Home/Hero";
import Plan from "../components/Home/Plan";
import Footer from "../components/Layout/Footer";
import { getMovieGenres, getMoviesByGenre } from "../Services/movieService";




export default function StreamVibe() {

const [genres, setGenres] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

useEffect(() => {
  
  const fetchGenres = async ()=>{
    try {
      setLoading(true)
      const data = await getMovieGenres()
    
    const movieWithGenres = await Promise.all(
      data.map(async(e)=>{
      const movies = await getMoviesByGenre(e.id);

      return {
        ...e,
        movies: movies.slice(0, 4)
      }
    })
    )
    setGenres(movieWithGenres)
    } catch (error) {
      console.log(error)
      setError("Something went wrong")
    } finally{
      setLoading(false)
    }
  }
  fetchGenres()
}, [])



  return (
    <div className="font-manrope min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── CATEGORIES ───────────────────────────────────────────────────────── */}
      <Categories genres={genres} loading={loading} error={error} type='movie' />

      {/* ── DEVICES ──────────────────────────────────────────────────────────── */}
      <Devices />

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <Faq />

      {/* ── PRICING ──────────────────────────────────────────────────────────── */}
      <Plan />

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <Cta />

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
