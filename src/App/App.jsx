import { Route, Routes } from 'react-router-dom'
import { AppBar, Footer } from '../components'

import { MainPage, BookingsPage, TripPage, SignIn, SignUp } from '../pages'

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/bookings" element={<BookingsPage />}></Route>
        <Route path="/trip/:tripId" element={<TripPage />}></Route>
        <Route path="/sign-in" element={SignIn}></Route>
        <Route path="/sign-up" element={SignUp}></Route>
        <Route path="*" element={<MainPage />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
