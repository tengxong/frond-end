import React, { useEffect } from 'react'
import Home from './Home'
import Profile from './profile'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'

export default function index() {

const [isLoggedIn,setisLoggedln] = React.useState(false)

  useEffect(() =>{
    axios({
          url:"http://localhost:3000/isloggedIn",
          method:'post',
          withCredentials: true
    }).then(res =>{
        console.log(res.data)
        if(res.data.status===200){
            setisLoggedln(true)
        }
    })
  },[])

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home isLoggendIn= {isLoggedIn} /> } />
                    <Route path='/login' element={<Login isLoggendIn= {isLoggedIn} setisLoggedln={setisLoggedln}/>}  />
                    <Route path='/profile' element={<Profile isLoggendIn= {isLoggedIn} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


