import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import authImage from "../assets/image/auth.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useAuthState } from 'react-firebase-hooks/auth';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { auth, db } from '../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { AuthContext } from '../providers/AuthProvider'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const navBtn = {
    background: "transparent",
    color: "#fff",
    padding: "10px 20px",
    fontWeight: "600",
    border: "1px solid white"
}

const SignUp = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const usersRef = collection(db, 'userRef');
    const { setMyUserDb, user: newOne } = useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false);


    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    const checkUserExistence = async (userId) => {
        try {
            const userRef = doc(usersRef, userId);
            const docData = await getDoc(userRef);
            return docData.exists();
        } catch (error) {
            // Handle the error here
            console.error("Error checking user existence:", error);
            return false; // Assuming user doesn't exist in case of error
        }
    };

    const schema = yup.object().shape({
        email: yup.string().email("Invalid email format").required("This field is required"),
        username: yup.string().required("This field is required"),
        password: yup.string().required("This Field is required")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onCreateAccount = async (data) => {
        try {
            const { email, password } = data;
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User created:', user);

            if (user && user.uid) {
                const authenticatedUserId = user.uid;

                const isUserExisting = await checkUserExistence(authenticatedUserId);

                if (isUserExisting) {
                    // User exists in the database, navigate to the desired page
                    alert("Account Created Sucessfully")
                    navigate(`/`);
                    return;
                } else {
                    // User schema doesn't exist, create the user schema and redirect
                    const userData = {
                        userId: authenticatedUserId,
                        email: user.email,
                        username: data.username,
                    };

                    // Create the user schema in Firestore
                    await setDoc(doc(usersRef, authenticatedUserId), userData);

                    // Update the user context or perform any other necessary actions
                    setMyUserDb(userData);
                    alert("Account Created Sucessfully")

                    // Navigate to the desired page
                    navigate(`/`);
                }
            } else {
                console.error("Error signing in with Google: User information not available.");
            }
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };


    return (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, padding: { md: "40px", xs: "20px" }, minHeight: "80vh", gap: "30px", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <Box>
                    <Typography variant='h4' sx={{ color: "#fff" }} >
                        Sign Up
                    </Typography>
                </Box>
                <Box sx={{ padding: " 0", display: "grid", gap: "10px" }}>
                    <form className='grid gap-3' onSubmit={handleSubmit(onCreateAccount)} >
                        <label htmlFor="email" className='text-2xl text-[#fff]'>Email</label>
                        <input type="email" placeholder='Email' className='p-2' {...register('email')} />
                        {errors.email && <Typography variant='p' sx={{ color: "red" }}>{errors.email.message}</Typography>}
                        <label htmlFor="username" className='text-2xl text-[#fff]'>Username</label>
                        <input type="text" placeholder='Username' className='p-2' {...register('username')} />
                        {errors.username && <Typography variant='p' sx={{ color: "red" }}>{errors.email.message}</Typography>}
                        <label htmlFor="username" className='text-2xl text-[#fff]'>Password</label>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%"
                        }}>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder='Password'
                                className='p-2 w-[90%]'
                                {...register('password')}
                            />
                            <IconButton onClick={togglePasswordVisibility} sx={{ width: "10%" }}>
                                {passwordVisible ? <VisibilityIcon sx={{ color: "#fff" }} /> : <VisibilityOffIcon sx={{ color: "#fff" }} />}
                            </IconButton>
                        </Box>
                        {errors.password && <Typography variant='p' sx={{ color: "red" }}>{errors.password.message}</Typography>}
                        <Button type='submit' sx={navBtn}>
                            Sign Up
                        </Button>
                    </form>
                    <Typography variant='p' sx={{ color: "#fff" }}>
                        Registered already ? <Link className='text-[#000] bg-white font-bold' to={"/login"}>
                            Login
                        </Link>
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ padding: "40px", height: "500px", display: { md: "flex", xs: "none" } }}>
                <img src={authImage} alt="" className='w-full h-full' />
            </Box>
        </Box>
    )
}

export default SignUp