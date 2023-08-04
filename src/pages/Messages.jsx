import { Box, Stack, Typography } from '@mui/material'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import React from 'react'

const Messages = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", padding: { md: "40px", xs: "20px" }, minHeight: "80vh", gap: "30px" }}>
            <Stack direction="column" sx={{ width: "100%", background: "", gap: "10px" }}>
                <Box sx={{ width: "100%", padding: "10px", background: "#fff", borderRadius: "5px", display: "grid", alignItems: "center" }}>
                    <Box sx={{ width: "100%", padding: "10px", background: "#fff", borderRadius: "5px", display: "flex", alignItems: "center", gap: "25px" }}>
                        <Box sx={{ width: "60px", height: "60px", background: "#000", padding: "10px", borderRadius: "5px", display: { xs: "none", md: "flex" } }}>
                            <TipsAndUpdatesIcon sx={{ fontSize: "40px", color: "#fff" }} />
                        </Box>
                        <Typography variant='p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum doloribus pariatur non provident adipisci, consequatur voluptatem? Doloribus ullam maiores placeat atque alias quibusdam ducimus quo eum nisi nam? Incidunt.
                        </Typography>
                    </Box>
                    <Box sx={{ width: "100%", padding: "10px", background: "#fff", borderRadius: "5px", display: "grid", alignItems: "center", gap: "5px" }}>
                        <Typography variant='p'></Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "100%", padding: "10px", background: "#fff", borderRadius: "5px", display: "grid", alignItems: "center" }}>
                    <Box sx={{ width: "100%", padding: "10px", background: "#fff", borderRadius: "5px", display: "flex", alignItems: "center", gap: "25px" }}>
                        <Box sx={{ width: "60px", height: "60px", background: "#000", padding: "10px", borderRadius: "5px", display: { xs: "none", md: "flex" } }}>
                            <TipsAndUpdatesIcon sx={{ fontSize: "40px", color: "#fff" }} />
                        </Box>
                        <Typography variant='p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum doloribus pariatur non provident adipisci, consequatur voluptatem? Doloribus ullam maiores placeat atque alias quibusdam ducimus quo eum nisi nam? Incidunt.
                        </Typography>
                    </Box>
                    <Box sx={{ width: "100%", padding: "10px", background: "#fff", borderRadius: "5px", display: "grid", alignItems: "center", gap: "5px" }}>
                        <Typography variant='p'></Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "100%", padding: "10px", background: "#fff", borderRadius: "5px", display: "grid", alignItems: "center" }}>
                    <Box sx={{ width: "100%", padding: "10px", background: "#fff", borderRadius: "5px", display: "flex", alignItems: "center", gap: "25px" }}>
                        <Box sx={{ width: "60px", height: "60px", background: "#000", padding: "10px", borderRadius: "5px", display: { xs: "none", md: "flex" } }}>
                            <TipsAndUpdatesIcon sx={{ fontSize: "40px", color: "#fff" }} />
                        </Box>
                        <Typography variant='p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum doloribus pariatur non provident adipisci, consequatur voluptatem? Doloribus ullam maiores placeat atque alias quibusdam ducimus quo eum nisi nam? Incidunt.
                        </Typography>
                    </Box>
                    <Box sx={{ width: "100%", padding: "10px", background: "#fff", borderRadius: "5px", display: "grid", alignItems: "center", gap: "5px" }}>
                        <Typography variant='p'></Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "100%", padding: "10px", background: "#fff", borderRadius: "5px", display: "grid", alignItems: "center" }}>
                    <Box sx={{ width: "100%", padding: "10px", background: "#fff", borderRadius: "5px", display: "flex", alignItems: "center", gap: "25px" }}>
                        <Box sx={{ width: "60px", height: "60px", background: "#000", padding: "10px", borderRadius: "5px", display: { xs: "none", md: "flex" } }}>
                            <TipsAndUpdatesIcon sx={{ fontSize: "40px", color: "#fff" }} />
                        </Box>
                        <Typography variant='p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum doloribus pariatur non provident adipisci, consequatur voluptatem? Doloribus ullam maiores placeat atque alias quibusdam ducimus quo eum nisi nam? Incidunt.
                        </Typography>
                    </Box>
                    <Box sx={{ width: "100%", padding: "10px", background: "#fff", borderRadius: "5px", display: "grid", alignItems: "center", gap: "5px" }}>
                        <Typography variant='p'></Typography>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default Messages