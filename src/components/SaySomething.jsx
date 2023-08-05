import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import emailjs from '@emailjs/browser';

const navBtn = {
    background: "linear-gradient(90deg,#97a9d0,#fff)",
    color: "black",
    width: "100%",
    borderRadius: "15px",
    padding: "10px 20px",
    ":hover": {
        background: "linear-gradient(90deg,#fff,#97a9d0)",
        borderRadius: "8px"
    },
    fontWeight: "600"
}

const Profile = ({ name, email }) => {
    const navigate = useNavigate()
    const form = useRef();

    const sendForm = (content) => {
        let linkURL = `http://localhost:5173/${name}`
        const templateParams = {
            to_email: email, // Email address of the recipient
            from_name: 'NoFace', // Your website or app name
            name: name, // Name of the person giving feedback
            content: `${content} click here to read more ${linkURL}` // Content of the feedback
        };

        emailjs
            .send(
                import.meta.env.VITE_MAIL_SERVICE_ID,
                import.meta.env.VITE_MAIL_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_MAIL_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const [isLoading, setIsLoading] = useState(false);
    const schema = yup.object().shape({
        content: yup.string().min(15).required('This field is required and must be more than 15 characters'),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const commentRef = collection(db, 'comment');
    const onCreateComment = async (data) => {
        setIsLoading(true);
        try {
            const commentData = {
                ...data,
                linkOwner: name,
            };
            sendForm(data.content)
            navigate("/login")
            // console.log(commentData);
            await addDoc(commentRef, commentData);
            reset()
            alert("Sucessfully Created")
        } catch (error) {
            console.error('Error creating post:', error);
            setError('Failed to create post');
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <Box sx={{ height: "80vh", display: "flex", alignItems: "center", overflow: "auto", padding: "20px" }}>
            <Box sx={{ maxWidth: "650px", padding: "25px", marginX: "auto", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "20px", gap: "25px" }}>
                <Typography variant='h4'>
                    Say Something...
                </Typography>
                <Box sx={{ paddingX: { md: "30px" }, textAlign: "center" }}>
                    <Typography variant='p'>
                        Say what do you think about <span className='bg-black text-[#fff]'>{name}</span> ? <br /> Leave a feedback for <span className='bg-black text-[#fff]'>{name}</span> anonymously using the form below.. 🥰
                        Thank You!! 😍😊
                    </Typography>
                </Box>
                <Stack direction={"column"} sx={{ gap: "20px", display: "grid", width: "100%", }} >
                    <form className='w-full grid gap-[10px] ' onSubmit={handleSubmit(onCreateComment)} ref={form}>
                        <textarea
                            cols="30"
                            className='p-2 bg-slate-200 text-black'
                            placeholder={`Leave A Message For ${name} Here`}
                            {...register('content')}
                        />
                        {errors.content && <p className="text-red-700">{errors.content.message}</p>}
                        <Button sx={navBtn} type='submit' disabled={isLoading}  >
                            {isLoading ? 'Loading...' : 'Submit'}
                        </Button>
                    </form>
                </Stack>
            </Box>
        </Box>
    )
}

export default Profile;