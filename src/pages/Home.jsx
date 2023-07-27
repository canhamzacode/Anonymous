import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import annonymous1 from "../assets/image/annonymous1.png"
import { Link } from 'react-router-dom'

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
        <Box sx={{ width: "100%", padding: "20px" }}>
            <Stack sx={{
                display: "grid",
                gridTemplateColumns: { md: "0.8fr 1fr", xs: "1fr" },
                gap: "25px",
                alignItems: "center",

            }}>
                <Box sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <img src={annonymous1} alt="image" className="ladyWithImg" />
                </Box>
                <Box sx={{
                    display: "grid",
                    gap: "10px"
                }}>
                    <Typography variant='h1' sx={{ fontSize: "40px", }}>
                        Annonymous
                    </Typography>
                    <Typography variant='p' sx={{
                        fontSize: "20px",
                    }}>
                        Express your opinions about various topics, and even have the opportunity to confess your feelings to your crush or admirer without revealing your identity. Receive responses from others in a fun and confidential way.
                    </Typography> <br />
                    <Button sx={navBtn}>
                        Get Started
                    </Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default Home