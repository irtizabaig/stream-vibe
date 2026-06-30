import React from 'react'
import OurGenre from './OurGenre'
import TopInGenre from './TopInGenre'
import TrendingNow from './TrendingNow'
import NewReleased from './NewReleased'
import MustWatchMovies from './MustWatchMovies'

const ShowsContainer = ({showsGenre, showsLoading, error, trendingShows, popularShows, mustWatchShow}) => {
  return (
    <div className='w-[min(1400px,calc(100%-40px))] min-h-screen mx-auto border rounded-3xl relative mt-20 py-20 lg:px-10'>
        <p className='bg-red-700 text-xl w-fit py-3 px-6 rounded-md absolute -top-6 left-10'>Shows</p>
        
        <OurGenre data={showsGenre} showsLoading={showsLoading} error={error} type="show" />
        <TopInGenre data={showsGenre} type="show" />
        <TrendingNow data={trendingShows} type="show" />
        <NewReleased data={popularShows} />
        <MustWatchMovies data={mustWatchShow} />

        </div>
  )
}

export default ShowsContainer