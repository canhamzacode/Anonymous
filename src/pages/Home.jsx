import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import annonymous1 from "../assets/image/annonymous1.png"
import { Link } from 'react-router-dom'
import TopCategories from '../components/TopCategories'
import download3 from "../assets/image/download3.jpg"

const navBtn = {
    // background: "linear-gradient(90deg,#ffce6d,#fdc962,#fcc456,#fabe4a,#f8b93d)",
    background: "linear-gradient(90deg,#97a9d0,#fff)",
    color: "black",
    borderRadius: "15px",
    padding: "10px 20px",
    fontWeight: "600"
}

const Home = () => {
    return (
        <Box sx={{ width: "100%", }}>
            <Stack sx={{
                display: "grid",
                gridTemplateColumns: { md: "0.8fr 1fr", xs: "1fr" },
                gap: "25px",
                alignItems: "center",
                padding: { xs: "20px", md: "40px" }
            }}>
                <Box sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <img src={download3} alt="image" className="ladyWithImg" />
                </Box>
                <Box sx={{
                    display: "grid",
                    gap: "10px",
                    width: "100%",
                }}>
                    <Typography variant='h1' sx={{ fontSize: "40px", }}>
                        NoFace
                    </Typography>
                    <Typography variant='p' sx={{
                        fontSize: "20px",
                    }}>
                        Express your opinions about various topics, and even have the opportunity to confess your feelings to your crush or admirer without revealing your identity. Receive responses from others in a fun and confidential way.
                    </Typography> <br />
                    {<Link to="/login" className='w-full'>
                        <Button sx={navBtn} className='w-full'>
                            Get Started
                        </Button>
                    </Link>}
                </Box>
            </Stack>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                padding: { xs: "20px", md: "40px" },
                background: "#a2b4db"
            }}>
                <TopCategories />
            </Box>
        </Box>
    )
}

export default Home