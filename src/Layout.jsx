import React, { lazy } from "react";
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Box } from '@mui/material'

const Layout = () => {
    return (
        <Box>
            <NavBar />
            <Outlet />
        </Box>
    )
}

export default Layout