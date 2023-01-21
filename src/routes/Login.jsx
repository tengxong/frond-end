import React, { useState } from 'react'
import axios from "axios"
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()


    //   useEffect(() => {
    //     axios({
    //       url: 'http://localhost:3002/login',
    //       method: 'post'

    //     }).then(res => {
    //       console.log(res.data)

    //       setemail(res.data[0].email)
    //       setpassword(res.data[0].password)

    //     })
    //   }, [])

    const handleLogin = () => {
        axios({
            url: "http://localhost:3003/login",
            method: 'post',
            data: {
                email: email,
                password: password

            },
            withCredentials: true
        }).then(res => {
            console.log(res.data)
            if (res.data.status === 200) {
                props.setisLoggedln(true)
                navigate('/profile')
            } else {
                console.log("failed")
            }


        })
    }

    const handleChangeEmail = (e) => {
        setemail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setpassword(e.target.value)
    }
    if (!props.isLoggedln) {
        return (
            <Box>
                {/* <Box display='flex'>
      <Box width='30%' p='2'>
        <Avatar sx={{ width: 150, height: 150 }}>j</Avatar>
      </Box>
    </Box> */}

                <Box p={2}>
                    {/* <Typography variant='body2'>Accunding</Typography> */}
                </Box>

                <Grid item sm={9} xs={12} display='flex' justifyContent='center' alignItems='center'>
                    <TextField
                        value={email || ""}
                        label='email'
                        onChange={handleChangeEmail}
                    />
                </Grid>

                <Grid item sm={9} xs={12} display='flex' justifyContent='center' alignItems='center' p='2'>
                    <TextField
                        value={password || ""}
                        label='password'
                        type="password"
                        onChange={handleChangePassword}
                    />
                </Grid>

                <Button onClick={handleLogin} variant='outlined'>login</Button>

            </Box>
        )

    }else{
        return(
            <div>
                haha!!!
            </div>
        )
    }

}


