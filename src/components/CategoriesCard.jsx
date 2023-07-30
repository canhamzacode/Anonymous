import { Typography } from "@mui/material";
import React from "react";


const CategoriesCard = ({ src, title, description }) => {
    return (
        <div className="categoriesCard grid gap-2 ">
            <figure className="w-full fig">
                <img src={src} alt="" className="h-full" />
            </figure>
            <figcaption>
                <Typography variant="h5" sx={{ fontWeight: "600" }}>
                    {title}
                </Typography>
                <Typography variant="p" sx={{ fontSize: "18px" }}>
                    {description}
                </Typography>
            </figcaption>
        </div>
    );
};

export default CategoriesCard;