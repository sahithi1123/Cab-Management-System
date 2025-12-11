import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Hr from './components/Hr'
import BookingCab from './components/hr/BookingCab'
import MyBookings from './components/hr/MyBookings'
import DriverAssign from './components/Admin/DriverAssign'
import Admin from './components/Admin'
import ViewAll from './components/Admin/ViewAll'
import Home from './components/Home'
import "./App.css";
function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reg' element={<Register/>}/>
          <Route path='/log' element={<Login/>}/>
          <Route path='/Hr' element={<Hr/>}/>
          <Route path='/bookingCab' element={<BookingCab/>}/>
          <Route path='/myBookings' element={<MyBookings/>}/>
          <Route path='/admin' element ={<Admin/>}/>
          <Route path='/driverassign' element={<DriverAssign/>}/>
          <Route path ='/vall' element={<ViewAll/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
