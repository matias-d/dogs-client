import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'

// Pages Imports
import About from './pages/AboutPage/About'
import BreedsPage from './pages/BreedsPage/BreedsPage'
import CreateBreedPage from './pages/CreateBreedPage/CreateBreedPage'
import DetailPage from './pages/DetailPage/DetailPage'
import LandingPage from './pages/LandingPage/LandingPage'

function App () {
  return (
    <>
      <Header />
      <div className='App'>
        <Routes>
          <Route path='/dogs-client' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/create-breed' element={<CreateBreedPage />} />
          <Route path='/breeds' element={<BreedsPage />} />
          <Route path='/breed/:id' element={<DetailPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
