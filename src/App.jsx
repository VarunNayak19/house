

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Attic from './components/Attic/Attic'
import WashRoom from './components/WashRoom/WashRoom'
import BedRoom from './components/BedRoom/BedRoom'
import Hall from './components/Hall/Hall'
import StoreRoom from './components/StoreRoom/StoreRoom'
import LandingPage from './components/LandingPage/LandingPage'
function App() {

  return (

    <div className='w-full h-screen flex justify-center items-center relative'>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/attic" element={<Attic />} />
          <Route path="/washroom" element={<WashRoom />} />
          <Route path="/bedroom" element={<BedRoom />} />
          <Route path="/hall" element={<Hall />} />
          <Route path="/store" element={<StoreRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
