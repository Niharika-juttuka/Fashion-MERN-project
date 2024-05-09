import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signupp from './signup/Signupp'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './login/Login'
import Homes from './Homes/Homes'
import Navbar from './Navbar/Navbar'
import Aboutus from './aboutus/Aboutus'
import Services from './services/services'
import First from './first/first'
import Profile from './Profile/Profile'
import Recommendation from './recommendation/Recommendation'
import Bookings from './booking/Booking'
import Successful from './successful/successful'
import Contact from './contact/Contact'

function App() {
  let firstData =[
    {text1:"Elevate Your Wardrobe,",text2:"feel the Posh vibe"}
  ]
  const [firstCount,setfirstCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);
  


  return (
      <BrowserRouter>
    {/* <Navbar/> */}
        <Routes>
          <Route path='/register' element={<Signupp />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Homes />}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/first' element={<First/>} ></Route>
          <Route path='/profile' element={<Profile/>}></Route>    
          <Route path='/recommendation' element={<Recommendation/>}></Route>  
          <Route path='/booking' element={<Bookings/>}></Route>    
          <Route path='/successful' element={<Successful/>}></Route> 
          <Route path='/contact' element={<Contact/>}></Route>   
          <Route path='/aboutus' element={<Aboutus/>}></Route>   


   
        </Routes>
    
      </BrowserRouter>
  
  )
}

export default App
