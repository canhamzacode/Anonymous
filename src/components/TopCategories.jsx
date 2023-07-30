import React, { useRef, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import Anonymous2 from "../assets/image/Anonymous2.jpg"
import download1 from "../assets/image/download1.jpg"
import download2 from "../assets/image/download2.jpg"
import download3 from "../assets/image/download3.jpg"
import { Typography } from "@mui/material";


const categories = [
    {
        image: Anonymous2,
        title: "Tech",
        description: "All distributions of tech books",
    },
    {
        image: download1,
        title: "Nutrition",
        description: "Boost your Nutrition and Health with these books",
    },
    {
        image: download2,
        title: "Sports",
        description: "For Athletes, get in the zone and aim for the summit.",
    },
    {
        image: download3,
        title: "Tech",
        description: "All distributions of tech books",
    },
];
const TopCategories = () => {

    return (
        // <div className="bg-[#E9FCF4] w-full px-10 py-5 categriesHeader">
        <div className=" w-full  py-5 categriesHeader  ">
            <Typography variant="h4" sx={{ textAlign: "center", padding: "10px", marginTop: "20px" }}>
                Why Us
            </Typography>
            <Typography variant="p" sx={{ textAlign: "center", padding: "10px", marginTop: "20px" }}>
                Our Anonymous Messaging App comes along with many great features. Here we are going to list some of them. Have a look below.
            </Typography>
            <div className="w-full flex items-start pt-3 overflow-x-auto gap-8 custom-bar">
                {categories.map((category, key) => {
                    return (
                        <CategoriesCard
                            key={key}
                            src={category.image}
                            title={category.title}
                            description={category.description}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default TopCategories;