import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const navBtn = {
    background: "linear-gradient(90deg,#97a9d0,#fff)",
    color: "black",
    borderRadius: "15px",
    padding: "10px 20px",
    ":hover": {
        background: "linear-gradient(90deg,#fff,#97a9d0)",
        borderRadius: "8px"
    },
    fontWeight: "600"
}
const NavBar = () => {
    return (
        <Stack direction={"row"} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: { xs: "20px", md: "20px 40px" }, background: "#a2b4db" }}>
            <Link to="/">
                <Typography variant='h1' sx={{ fontSize: "30px", }}>
                    Annonymous
                </Typography>
            </Link>
            <Stack direction={"row"} sx={{ display: "flex", alignItems: "center", gap: { md: "50px", xs: "20px" }, }}>
                <Link to="/login">
                    <Button sx={navBtn}>
                        Login
                    </Button>
                </Link>
                <Link to="/signup">
                    <Button sx={navBtn}>
                        Sign Up
                    </Button>
                </Link>
                {<div className="profileImg" >
                    <img src={""} alt="profile" />
                </div>}
            </Stack>
        </Stack>
    )
}

export default NavBar