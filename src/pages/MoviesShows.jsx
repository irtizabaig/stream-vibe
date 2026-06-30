import React, { useEffect, useState } from 'react'
import HeroSlider from '../components/MovieShows/HeroSlider'
import Nav from '../components/Layout/Nav'
import MovieContainer from '../components/MovieShows/MovieContainer'
import ShowsContainer from '../components/MovieShows/ShowsContainer'
import Footer from '../components/Layout/Footer'
import Cta from '../components/Home/Cta'
import { getMovieGenres, getMoviesByGenre, getPopularMovies, getPopularShows, getShowsByGenre, getShowsGenres, getTopRatedMovies, getTopRatedShows, getTrendingMovies, getTrendingShows } from '../Services/movieService'

const MoviesShows = () => {


  const [MovieLoading, setMovieLoading] = useState(false)
  const [showsLoading, setShowsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [moviesGenre, setMoviesGenre] = useState([])
  const [showsGenre, setShowsGenre] = useState([])

  const [trendingMovies, setTrendingMovies] = useState([])
  const [trendingShows, setTrendingShows] = useState([])

  const [popularMovies, setPopularMovies] = useState([])
  const [popularShows, setPopularShows] = useState([])

  const [mustWatchMovie, setMustWatchMovie] = useState([])
  const [mustWatchShow, setMustWatchShow] = useState([])

  useEffect(() => {

    const fetchingMovies = async ()=>{
      try {

      setMovieLoading(true)
      const data = await getMovieGenres()

      const movieWithGenre = await Promise.all(
        data.map(async (genre)=>{
        const movie = await getMoviesByGenre(genre.id)

        return {
          ...genre,
          movie: movie.slice(0, 4)
        }
      })

      )
      setMoviesGenre(movieWithGenre)
      } catch (error) {
        console.log(error)
        setError("Something Went Wrong in movies")
      } finally{
        setMovieLoading(false)
      }
    }

    const fetchingSHows = async ()=>{
      try {
      setShowsLoading(true)
      const data = await getShowsGenres()

      const showsWithGenre = await Promise.all(
        data.map(async (genre)=>{
        const shows = await getShowsByGenre(genre.id)

        return {
          ...genre,
          shows: shows.slice(0, 4)
        }

      })
      )
      setShowsGenre(showsWithGenre)
      } catch (error) {
        console.log(error)
        setError("Something went wrong in Shows")
      } finally{
        setShowsLoading(false)
      }
    } 

    const fetchTrendingMovies = async ()=>{
      const movieData = await getTrendingMovies()
      const showData = await getTrendingShows()

      setTrendingMovies(movieData)
      setTrendingShows(showData)
    
    }

    const fetchingNewReleased = async ()=>{
      const popularMovieData = await getPopularMovies()
      const popularShowData = await getPopularShows()

      setPopularMovies(popularMovieData)
      setPopularShows(popularShowData)

    }

    const fetchingMustWatch = async ()=>{
      const mustWathchMovieData = await getTopRatedMovies()
      const mustWathchShowData = await getTopRatedShows()

      setMustWatchMovie(mustWathchMovieData)
      setMustWatchShow(mustWathchShowData)
    }

    fetchingMustWatch()
    fetchingNewReleased()
    fetchTrendingMovies()
    fetchingMovies()
    fetchingSHows()
  }, [])

  return (
    <div className="font-manrope min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">

      <Nav />
      <HeroSlider data={trendingMovies} />
      <MovieContainer moviesGenre={moviesGenre} MovieLoading={MovieLoading} error={error} trendingMovies={trendingMovies} popularMovies={popularMovies} mustWatchMovie={mustWatchMovie} />
      <ShowsContainer showsGenre={showsGenre} showsLoading={showsLoading} error={error} trendingShows={trendingShows} popularShows={popularShows} mustWatchShow={mustWatchShow} />
      <Cta />
      <Footer />
      
    </div>
  )
}

export default MoviesShows