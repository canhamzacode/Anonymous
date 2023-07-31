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

const ProfileNotFound = () => {
    return (
        <Box sx={{ height: "80vh", display: "flex", alignItems: "center", overflow: "auto" }}>
            <Box sx={{ maxWidth: "650px", padding: "25px", marginX: "auto", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "20px", gap: "25px" }}>
                <Box sx={{ background: "red", width: "100%", Width: "200px", height: "200px" }}>
                    <img src={Love} className='w-full rounded-[50%]' />
                </Box>
                <Typography variant='h4'>
                    Say Something...
                </Typography>
                <Box sx={{ paddingX: { md: "30px" }, textAlign: "center" }}>
                    <Typography variant='p'>
                        Say what do you think about random_nck5 or Leave a feedback for random_nck5 anonymously using the form below.. 🥰
                        Thank You!! 😍😊
                    </Typography>
                </Box>
                <Stack direction={"column"} sx={{ gap: "20px", display: "grid", width: "100%" }} >
                    <textarea name="" id="" cols="30" className='p-2 bg-slate-200 text-black' placeholder='Leave A Message For Hamza Here'></textarea>
                    {/* <Button sx={{ color: "#fff", display: "flex", marginX: "auto", gap: "20px", background: "black", width: "100%" }}  > */}
                    <Button sx={navBtn}  >
                        <span>Submit</span>
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default ProfileNotFound