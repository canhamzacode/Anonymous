import { Box, Button, Stack, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <Box sx={{ height: "80vh", display: "flex", alignItems: "center" }}>
            <Box sx={{ maxWidth: "650px", padding: "25px", marginX: "auto", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "20px", gap: "25px" }}>
                <Typography variant='h4'>
                    Hamza Code's Profile
                </Typography>
                <Box sx={{ display: "flex", gap: "10px" }}>
                    <Typography variant='p'>
                        https://gdpd.xyz/random_nck5
                    </Typography>
                    <ContentCopyIcon sx={{ cursor: "pointer" }} />
                </Box>
                <Box sx={{ paddingX: { md: "30px" }, textAlign: "center" }}>
                    <Typography variant='p'>
                        Share your profile link ❤️ to get responses from your friend. Go to "View Messages" to check out the responses. 👌
                    </Typography>
                </Box>
                <Stack direction={"column"} sx={{ gap: "20px", display: "grid", width: "100%" }} >
                    <Link to="/myMessages" className='w-full bg-black rounded-md'>
                        <Button sx={{ color: "#fff", display: "flex", marginX: "auto", gap: "20px" }}  >
                            <span>View Messages</span>
                            <MessageIcon />
                        </Button>
                    </Link>
                    <Link to="/myMessages" className='w-full bg-black rounded-md'>
                        <Button sx={{ color: "#fff", display: "flex", marginX: "auto", gap: "20px" }}  >
                            <span>Share On Whatsapp</span>
                            <WhatsAppIcon />
                        </Button>
                    </Link>
                    <Link to="/myMessages" className='w-full bg-black rounded-md'>
                        <Button sx={{ color: "#fff", display: "flex", marginX: "auto", gap: "20px" }}  >
                            <span>Share On Twitter </span>
                            <TwitterIcon />
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </Box>
    )
}

export default Profile