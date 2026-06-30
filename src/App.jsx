
import React from 'react'
import StreamVibe from './pages/StreamVibe_refactored'
import { Routes, Route } from 'react-router-dom'
import MoviesShows from './pages/MoviesShows'
import GenrePage from './pages/GenrePage'
import MovieDetail from './pages/MovieDetail'
import ShowDetail from './pages/ShowDetail'
import SearchPage from './pages/SearchPage'


const App = () => {

  return (

      <Routes>
        <Route path='/' element={<StreamVibe />} />
        <Route path='/movies-shows' element={<MoviesShows />} />
        <Route path='/genre' element={<GenrePage />} />
        <Route path='/movie-detail/:id' element={<MovieDetail />} />
        <Route path='/show-detail/:id' element={<ShowDetail />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
  )
}

export default App