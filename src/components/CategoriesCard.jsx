import { Box, Typography } from "@mui/material";
import React from "react";


const CategoriesCard = ({ src, title, description }) => {
    // background: "linear-gradient(90deg,#ffce6d,#fdc962,#fcc456,#fabe4a,#f8b93d)",
    // background: "linear-gradient(90deg,#97a9d0,#fff)",
    return (
        // <Box className="categoriesCard grid" sx={{ background: "linear-gradient(180deg,#8a817c,#fff)", minHeight: "540px", padding: "10px", borderRadius: "10px" }}>
        <Box className="categoriesCard grid" sx={{ background: "#f4f3ee", minHeight: "540px", padding: "10px", borderRadius: "10px", minWidth: "300px" }}>
            <figure className="w-full fig">
                <img src={src} alt="" className="h-full" />
            </figure>
            <figcaption>
                <Typography variant="h5" sx={{ fontWeight: "600", color: "#000" }}>
                    {title}
                </Typography>
                <Typography variant="p" sx={{ fontSize: "18px", fontWeight: "400", color: "#000" }}>
                    {description}
                </Typography>
            </figcaption>
        </Box>
    );
};

export default CategoriesCard;