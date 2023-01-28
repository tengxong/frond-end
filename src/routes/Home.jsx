import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

export default function Home(props) {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/login')
  }
  if (props.isLoggedIn) {
  return (
    <div>Home</div>
  )
  }else{
    return (
      <div>
        {/* <Navigate to='login'/> */}
        <Button variant='outlined' onClick={handleLogin}>login</Button>
      </div>
    )
  }
}

// import React ,{useEffect}from 'react'
// import  Button  from '@mui/material'
// import  useNavigate from 'react-router-dom'

// export default function Home(props) {

//   // useEffect(() =>{
//   //   axios({
//   //         url:"http://localhost:3000/isloggedIn",
//   //         method:'post',
//   //         withCredentials: true
//   //   }).then(res =>{
//   //       console.log(res.data)
//   //       if(res.data.status===200){
//   //           setisLoggedln(true)
//   //       }
//   //   })
//   // },[])

//   //ຕົວເອົາ
  // const navigate = useNavigate()
  // const handleLogin = () => {
  //   navigate('/login')
//   }
//   if (props.isLoggedIn) {
//     return(
//       <div>Home</div>
//     )
//   }
//   else {
//     return (
//       <div>
//         {/* <Navigate to='login'/> */}
//         please log in
//         <Button variant='outlined' onClick={handleLogin}>login</Button>
//       </div>
//     )
//   }
// }



