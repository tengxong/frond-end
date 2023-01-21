import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(props) {

  //ຕົວເອົາ
  const navigate = useNavigate()
  const handleLogin = (e) => {
    navigate('/login')
  }
  if (props.isLoggedIn) {
    reture(
      <div>Home</div>
    )
  }
  else {
    return (
      <div>
        {/* <Navigate to='login'/> */}
        please log in
        <Button variant='outlined' onClick={handleLogin}>login</Button>
      </div>
    )
  }
}
