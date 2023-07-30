import { Box, Typography } from "@mui/material";
import React from "react";


const CategoriesCard = ({ src, title, description }) => {
    // background: "linear-gradient(90deg,#ffce6d,#fdc962,#fcc456,#fabe4a,#f8b93d)",
    // background: "linear-gradient(90deg,#97a9d0,#fff)",
    return (
        <Box className="categoriesCard grid gap-2 " sx={{ background: "linear-gradient(180deg,#97a9d0,#fff)", minHeight: "540px", padding: "10px", borderRadius: "10px" }}>
            <figure className="w-full fig">
                <img src={src} alt="" className="h-full" />
            </figure>
            <figcaption>
                <Typography variant="h5" sx={{ fontWeight: "600" }}>
                    {title}
                </Typography>
                <Typography variant="p" sx={{ fontSize: "18px", fontWeight: "4  00" }}>
                    {description}
                </Typography>
            </figcaption>
        </Box>
    );
};

export default CategoriesCard;