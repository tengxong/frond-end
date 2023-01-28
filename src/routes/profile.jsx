import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios'
import { useEffect } from 'react';


export default function Profile(props) {
  const [username, setusername] = useState("")
  const [firsname, setfirsname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [title, settitle] = useState("")
  const [id, setid] = useState("")
  useEffect(() => {
    axios({
      url: window.$api + '/get/9',
      method: 'get'

    }).then(res => {
      console.log(res.data)
      setusername(res.data[0].username)
      setfirsname(res.data[0].firsname)
      setlastname(res.data[0].lastname)
      setemail(res.data[0].email)
      setpassword(res.data[0].password)
      settitle(res.data[0].title)
      setid(res.data[0].id)
    })
  }, [])

  // const handleLogin = () => {
  //   axios({
  //     url: "http://localhost:3000/login",
  //     method: 'post',
  //     data: {
  //       email: "tengxiong@gmail.com",
  //       password: 12345677

  //     }

  //   }).then(res => {
  //     console.log(res.data)
  //     if (res.data.status === 200) {
  //         props.setisLoggedln(true)
  //         navigate('/')
  //     } else {
  //         console.log("failed")
  //     }

  //    .then(res => {
  //     console.log(res.data)
  //    })
  // }


  const handleChangeUsername = (e) => {
    setusername(e.target.value)
  }

  const handleChangeFirsname = (e) => {
    setfirsname(e.target.value)
  }

  const handleChangeLastnamename = (e) => {
    setlastname(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setemail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setpassword(e.target.value)
  }
  const handleChangeTitle = (e) => {
    settitle(e.target.value)
  }

  const handleUpdataUser = () => {
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    axios({
      url: window.$api + '/updateuser', // url backend
      method: 'put',
      data: {
        username: username, // right is backend from database
        firsname: firsname,
        lastname: lastname,
        email: email,  // left is backend create new
        password: password,
        title: title,
        id: id,
      }
    }).then(res => {
      console.log(res.data)
    })
  }
  if (props.isLoggedIn) {

    return (
      <Box>
        <Box display='flex'>
          <Box width='20%' p='2'>
            <Avatar sx={{ width: 100, height: 100 }}>j</Avatar>
          </Box>
          <Box width="80%" display="flex" flexDirection="column" justifyContent='center'>
            <Typography variant='h6'>John doe</Typography>
            <Typography variant='body2'>jonh@gmail.com-engineer</Typography>
            <Typography variant='caption'>Avatar by gravatar.com.or upload your own...</Typography>
          </Box>
        </Box>
        <Box p={2}>
          <Typography variant='body2'>Accunding</Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item sm={3} xs={12} display='flex' justifyContent='center' alignItems='center'>
            <Typography variant='body2'>Username</Typography>
          </Grid>
          <Grid item sm={9} xs={12}>
            <TextField
              value={username || ""}
              label='username'
              onChange={handleChangeUsername}
            />
          </Grid>
          <Grid item sm={3} xs={12} display='flex' justifyContent='center' alignItems='center'>
            <Typography variant='body2'>Firsname</Typography>
          </Grid>
          <Grid item sm={9} xs={12}>
            <TextField
              value={firsname || ""}
              label='firsname'
              onChange={handleChangeFirsname}
            />
          </Grid>
          <Grid item sm={3} xs={12} display='flex' justifyContent='center' alignItems='center'>
            <Typography variant='body2'>lastname</Typography>
          </Grid>
          <Grid item sm={9} xs={12}>
            <TextField
              value={lastname || ""}
              label='lastname'
              onChange={handleChangeLastnamename}
            />
          </Grid>
          <Grid item sm={3} xs={12} display='flex' justifyContent='center' alignItems='center'>
            <Typography variant='body2'>Email</Typography>
          </Grid>
          <Grid item sm={9} xs={12}>
            <TextField
              value={email || ""}
              label='email'
              onChange={handleChangeEmail}
            />
          </Grid>
          <Grid item sm={3} xs={12} display='flex' justifyContent='center' alignItems='center'>
            <Typography variant='body2'>password</Typography>
          </Grid>
          <Grid item sm={9} xs={12}>
            <TextField
              value={password || ""}
              label='password'
              type="password"
              onChange={handleChangePassword}
            />
          </Grid>
          <Grid item sm={3} xs={12} display='flex' justifyContent='center' alignItems='center'>
            <Typography variant='body2'>Title</Typography>
          </Grid>
          <Grid item sm={9} xs={12}>
            <TextField
              value={title || ""}
              label='title'
              onChange={handleChangeTitle}
            />
          </Grid>

        </Grid>
        <Button onClick={handleUpdataUser} variant='outlined'> update</Button>
      </Box>
    )
  }
  else {
    return (
      <div>
        {/* <Navigate to='/login'/> */}
        404: NOT_FOUND
      </div>
    )
  }
}



