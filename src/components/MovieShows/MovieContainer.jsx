import React from 'react'
import OurGenre from './OurGenre'
import TopInGenre from './TopInGenre'
import TrendingNow from './TrendingNow'
import NewReleased from './NewReleased'
import MustWatchMovies from './MustWatchMovies'

const MovieContainer = ({moviesGenre, MovieLoading, error, trendingMovies, popularMovies, mustWatchMovie}) => {
  return (
    <div className='w-[min(1400px,calc(100%-40px))] min-h-screen mx-auto border rounded-3xl relative lg:mt-10 py-20 lg:px-10'>
        <p className='bg-red-700 text-xl w-fit py-3 px-6 rounded-md absolute -top-6 left-10'>Movie</p>

        <OurGenre data={moviesGenre} MovieLoading={MovieLoading} error={error} type="movie" />
        <TopInGenre data={moviesGenre} type="movie" />
        <TrendingNow data={trendingMovies} type="movie" />
        <NewReleased data={popularMovies} />
        <MustWatchMovies data={mustWatchMovie} />
    </div>
  )
}

export default MovieContainer