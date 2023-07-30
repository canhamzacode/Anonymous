import React, { lazy } from "react";
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Box } from '@mui/material'
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <Box sx={{ width: "100%" }}>
            <NavBar />
            <Outlet />
            <Footer />
        </Box>
    )
}

export default Layout