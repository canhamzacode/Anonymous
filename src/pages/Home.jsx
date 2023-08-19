import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import annonymous1 from "../assets/image/annonymous1.png"
import { Link } from 'react-router-dom'
import TopCategories from '../components/TopCategories'
import download3 from "../assets/image/download3.jpg"
import { AuthContext } from '../providers/AuthProvider'

const navBtn = {
    background: "transparent",
    color: "#fff",
    padding: "10px 20px",
    fontWeight: "600",
    border: "1px solid white"
}

const Home = () => {
    const { user, logout } = useContext(AuthContext);
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
                    <Typography variant='h1' sx={{ fontSize: "40px", color: "#fff" }}>
                        NoFace
                    </Typography>
                    <Typography variant='p' sx={{
                        fontSize: "20px",
                        color: "#fff"
                    }}>
                        Express your opinions about various topics, and even have the opportunity to confess your feelings to your crush or admirer without revealing your identity. Receive responses from others in a fun and confidential way.
                    </Typography> <br />
                    {!user && <Link to="/login" className='w-full'>
                        <Button sx={navBtn} className='w-full'>
                            Get Started
                        </Button>
                    </Link>}
                    {user && <Link to={`/${user.username}`} className='w-full'>
                        <Button sx={navBtn} className='w-full'>
                            My Profile
                        </Button>
                    </Link>}
                </Box>
            </Stack>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                padding: { xs: "20px", md: "40px" },
                // background: "#e0afa0"
                background: "#282a30"
            }}>
                <TopCategories />
            </Box>
        </Box>
    )
}

export default Home