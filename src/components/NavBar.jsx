import { Box, Button, Stack, Typography, Avatar } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

const navBtn = {
    background: "transparent",
    color: "#fff",
    padding: "10px 20px",
    fontWeight: "600",
    border: "1px solid white"
}
const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const signUserOut = async () => {
        logout();
        // navigate("/");
    }
    return (
        // <Stack direction={"row"} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: { xs: "20px", md: "20px 40px" }, background: "#fffaff" }}>
        <Stack direction={"row"} sx={{
            display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: { xs: "20px", md: "20px 40px" },
            background: "#282a30",
        }}>
            <Link to="/">
                <Typography variant='h1' sx={{ fontSize: "30px", color: "#fff", fontWeight: "800" }}>
                    NoFace
                </Typography>
            </Link>
            <Stack direction={"row"} sx={{ display: "flex", alignItems: "center", gap: { md: "50px", xs: "20px" }, }}>
                {!user && <Link to="/login">
                    <Button sx={navBtn}>
                        Login
                    </Button>
                </Link>}
                {!user && < Link to="/signup">
                    <Button sx={navBtn}>
                        Sign Up
                    </Button>
                </Link>}
                {user && <Button sx={navBtn} onClick={signUserOut}>
                    <PowerSettingsNewIcon />
                </Button>}
                {/* {<Button sx={navBtn} onClick={signUserOut}>
                    <PowerSettingsNewIcon />
                </Button>} */}
                {user && <div className="profileImg" >
                    {/* <img src={""} alt="profile" /> */}
                    <Link to={`/${user?.username}`} >
                        <Avatar />
                    </Link>
                </div>}
            </Stack>
        </Stack >
    )
}

export default NavBar