import React, { useEffect } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link, Navigate, useParams } from 'react-router-dom';

const SameUser = ({ profile }) => {
    const currentURL = window.location.href;

    const handleCopyClick = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Copied");
    };
    return (
        <Box sx={{ height: "80vh", display: "flex", alignItems: "center" }}>
            <Box sx={{ maxWidth: "650px", padding: "25px", marginX: "auto", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "20px", gap: "25px" }}>
                <Typography variant='h4'>
                    {profile?.username}'s Profile
                </Typography>
                <Box sx={{ display: "flex", gap: "10px" }}>
                    <Typography variant='p'>
                        {currentURL}
                    </Typography>
                    <ContentCopyIcon sx={{ cursor: "pointer" }} onClick={handleCopyClick} />
                </Box>
                <Box sx={{ paddingX: { md: "30px" }, textAlign: "center" }}>
                    <Typography variant='p'>
                        Share your profile link ❤️ to get responses from your friend. Go to "View Messages" to check out the responses. 👌
                    </Typography>
                </Box>
                <Stack direction={"column"} sx={{ gap: "20px", display: "grid", width: "100%" }} >
                    <Link to="/messages" className='w-full bg-black rounded-md'>
                        <Button sx={{ color: "#fff", display: "flex", marginX: "auto", gap: "20px" }}  >
                            <span>View Messages</span>
                            <MessageIcon />
                        </Button>
                    </Link>
                    <Link to={`https://api.whatsapp.com/send?text=Write%20a%20*secret%20anonymous%20message*%20for%20me..%20%F0%9F%98%89%20I%20*won%27t%20know*%20who%20wrote%20it..%20%F0%9F%98%82%E2%9D%A4%20%F0%9F%91%89%20${currentURL}`} className='w-full bg-black rounded-md'>
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

export default SameUser