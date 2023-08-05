import { Box, Button, Stack, Typography, Avatar } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

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
    const { user, logout } = useContext(AuthContext);
    const signUserOut = async () => {
        logout();
        // navigate("/");
    }
    useEffect(() => {
        console.log(user);
    }, [])
    return (
        <Stack direction={"row"} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: { xs: "20px", md: "20px 40px" }, background: "#a2b4db" }}>
            <Link to="/">
                <Typography variant='h1' sx={{ fontSize: "30px", }}>
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