import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box sx={{ background: "#000", padding: { xs: "20px", md: "40px" }, display: "flex", alignItems: "center", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
            <Typography variant='h6' sx={{ color: "#fff", textAlign: "center", fontSize: "20px" }}>
                Made with Love By <span className='bg-[#fff] text-black'><Link to="https://twitter.com/canhamzacode">Hamza</Link></span> Copyright © 2023
            </Typography>
            <Box sx={{ display: "flex", gap: "20px" }}>
                <Link to="https://twitter.com/canhamzacode">
                    <TwitterIcon sx={{ background: "white", borderRadius: "5px" }} />
                </Link>
                <Link to="https://www.instagram.com/canhamzacode/">
                    <InstagramIcon sx={{ background: "white", borderRadius: "5px" }} />
                </Link>
            </Box>
        </Box>
    )
}

export default Footer