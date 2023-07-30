import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import auth from "../assets/image/auth.jpg"
import { Link } from 'react-router-dom'


const navBtn = {
    // background: "linear-gradient(90deg,#ffce6d,#fdc962,#fcc456,#fabe4a,#f8b93d)",
    background: "linear-gradient(90deg,#97a9d0,#fff)",
    color: "black",
    borderRadius: "15px",
    padding: "10px 20px",
    fontWeight: "600"
}
const Login = () => {
    return (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, padding: { md: "40px", xs: "20px" }, minHeight: "80vh", gap: "30px", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <Box>
                    <Typography variant='h4'>
                        Login
                    </Typography>
                </Box>
                <Box sx={{ padding: " 0", display: "grid", gap: "10px" }}>
                    <form className='grid gap-3' >
                        <label htmlFor="username" className='text-2xl'>Username</label>
                        <input type="text" placeholder='Username' className='p-2' />
                        <label htmlFor="username" className='text-2xl'>Password</label>
                        <input type="password" placeholder='Password' className='p-2' />
                        <Button sx={navBtn}>
                            Login
                        </Button>
                    </form>
                    <Typography variant='p'>
                        Don't have an Account? <Link className='text-[#fff] font-bold' to={"/signup"}>
                            Sign Up
                        </Link>
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ padding: "40px", height: "500px", display: { md: "flex", xs: "none" } }}>
                <img src={auth} alt="" className='w-full h-full' />
            </Box>
        </Box>
    )
}

export default Login