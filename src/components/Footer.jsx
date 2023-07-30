import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{ background: "#000", padding: { xs: "20px", md: "40px" } }}>
            <Typography variant='h6' sx={{ color: "#fff", textAlign: "center" }}>
                Made with Love By <span className='bg-[#000]'>Hamza</span> Copyright © 2023
            </Typography>
        </Box>
    )
}

export default Footer