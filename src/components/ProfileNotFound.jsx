import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Love from '../assets/image/love.jpg'
import { Link } from 'react-router-dom';
const navBtn = {
    background: "linear-gradient(90deg,#97a9d0,#fff)",
    color: "black",
    width: "100%",
    borderRadius: "15px",
    padding: "10px 20px",
    ":hover": {
        background: "linear-gradient(90deg,#fff,#97a9d0)",
        borderRadius: "8px"
    },
    fontWeight: "600"
}

const ProfileNotFound = ({ username }) => {
    return (
        <Box sx={{ height: "80vh", display: "flex", alignItems: "center", overflow: "auto" }}>
            <Box sx={{ maxWidth: "650px", padding: "25px", marginX: "auto", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "20px", gap: "25px" }}>
                <Box sx={{ background: "black", width: "100%", maxWidth: "150px", height: "150px", borderRadius: "50%", padding: "5px" }}>
                    <img src={Love} className='w-full rounded-[50%] h-full' />
                </Box>
                <Typography variant='h4'>
                    Oops..!
                </Typography>
                <Box sx={{ paddingX: { md: "30px" }, textAlign: "center" }}>
                    <Typography variant='p'>
                        There is no one with the username <span className='bg-black text-[#fff]'>{username}</span>. Try looking for any possible typos.
                    </Typography><br />
                    <Typography variant='p'>
                        Or, you can get started by registering with the username <span className='bg-black text-[#fff]'>{username}</span> right now. Tap on "Register Now" button!
                    </Typography>
                </Box>
                <Stack direction={"column"} sx={{ gap: "20px", display: "grid", width: "100%" }} >
                    <Link to="/signup">
                        <Button sx={navBtn}  >
                            <span>Register Now</span>
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </Box>
    )
}

export default ProfileNotFound