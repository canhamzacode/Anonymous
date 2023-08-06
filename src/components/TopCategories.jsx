import React, { useEffect, useRef, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import Anonymous2 from "../assets/image/Anonymous2.jpg"
import download1 from "../assets/image/download1.jpg"
import download2 from "../assets/image/download2.jpg"
import download3 from "../assets/image/download3.jpg"
import { Box, Typography } from "@mui/material";


const categories = [
    {
        image: Anonymous2,
        title: "Anonymity",
        description: "Our Platform ensures your privacy so that you stay anonymous everytime you send someone a secret message. You are anonymous until you ever choose to reveal your identity.",
    },
    {
        image: download1,
        title: "Safe & Secure",
        description: "Safety of our users using this anonymous messaging platform is very important for us. We have got reporting systems so that you can report anything that you do not like to see.",
    },
    {
        image: download2,
        title: "24/7 Support",
        description: "If there is anything that you need help with related to our anonymous messaging and feedback platform, We are always here for you. 24 hours a day and 7 days a week.",
    },
    {
        image: download3,
        title: "Easy 2 Use",
        description: "We are constantly working on Kubool as a platform to make it as user friendly as possible. As of now you can just download our app, fill in your username & pass to get started.",
    },
];
const TopCategories = () => {
    const parentRef = useRef(null);

    useEffect(() => {
        const scrollContainer = parentRef.current;
        let scrollAmount = 0;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        const scroll = () => {
            scrollAmount++;
            if (scrollAmount > maxScroll) {
                scrollAmount = 0;
            }
            scrollContainer.scrollLeft = scrollAmount;
        };

        const scrollInterval = setInterval(scroll, 20);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <Box className=" w-full  py-5 categriesHeader">
            <Box sx={{ marginX: "auto", maxWidth: "600px", textAlign: "center", color: "#fff" }}>
                <Typography variant="h4" sx={{ textAlign: "center", padding: "10px", marginTop: "20px" }}>
                    Why Us?
                </Typography>
                <Typography variant='h6' sx={{
                    fontSize: "20px",
                }}>
                    Our Anonymous Messaging App comes along with many great features. Here we are going to list some of them. Have a look below.
                </Typography>
            </Box><br />
            <Box className="w-full flex items-start pt-3 overflow-x-auto gap-8 custom-bar" ref={parentRef}>
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
            </Box>
        </Box>
    );
};

export default TopCategories;