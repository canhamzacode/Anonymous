import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProvider';
import useGetUserById from '../hooks/useGetUserById';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const navBtn = {
    background: "transparent",
    color: "#fff",
    padding: "10px 20px",
    fontWeight: "600",
    border: "1px solid white"
}

const Login = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const userId = user?.uid;
    let userData = useGetUserById(userId);
    const { setMyUserDb } = useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(
            yup.object().shape({
                email: yup.string().email('Invalid email format').required('This field is required'),
                password: yup.string().required('This Field is required'),
            })
        ),
    });

    useEffect(() => {
        setMyUserDb(userData);
    }, [userId, userData])

    const onLogin = async (data) => {
        try {
            setLoading(true);
            setLoginError('');

            const { email, password } = data;

            // Perform authentication logic here (e.g., with Firebase, your backend, etc.)
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);

            // If the user data is fetched from Firestore and needed, fetch it here
            setLoading(false);
            navigate("/");
        } catch (error) {
            console.error('Error during login:', error);
            setLoading(false);
            if (error.code === 'auth/user-not-found') {
                // Email is not registered
                setLoginError('Email is not registered');
            } else if (error.code === 'auth/wrong-password') {
                // Password is incorrect
                setLoginError('Password is incorrect');
            } else {
                // Handle other types of errors
                setLoginError('An error occurred during login. Please try again later.');
                console.log('An error occurred during login:', error);
            }
            // Handle authentication errors here (e.g., show error message to the user)
        }
    };

    return (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, padding: { md: "40px", xs: "20px" }, minHeight: "80vh", gap: "30px", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <Box>
                    <Typography variant='h4'>
                        Login
                    </Typography>
                </Box>
                <Box sx={{ padding: " 0", display: "grid", gap: "10px" }}>
                    <form className='grid gap-3' onSubmit={handleSubmit(onLogin)}>
                        <label htmlFor='email' className='text-2xl'>Email</label>
                        <input type='email' placeholder='Email' className='p-2' {...register('email')} />
                        {errors.email && <Typography variant='p' sx={{ color: 'red' }}>{errors.email.message}</Typography>}

                        <label htmlFor='password' className='text-2xl'>Password</label>
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
                            <IconButton onClick={togglePasswordVisibility} sx={{ width: "10%", }}>
                                {passwordVisible ? <VisibilityIcon sx={{ color: "#fff" }} /> : <VisibilityOffIcon sx={{ color: "#fff" }} />}
                            </IconButton>
                        </Box>
                        {errors.password && <Typography variant='p' sx={{ color: 'red' }}>{errors.password.message}</Typography>}

                        {loginError && <Typography variant='p' sx={{ color: 'red' }}>{loginError}</Typography>}

                        <Button type='submit' sx={navBtn}>
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>
                    <Typography variant='p' sx={{ color: "#fff" }}>
                        Don't have an Account? <Link className='text-[#000] bg-white font-bold' to={"/signup"}>
                            Sign Up
                        </Link>
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ padding: "40px", height: "500px", display: { md: "flex", xs: "none" } }}>
                <img src={auth} alt="" className='w-full h-full' />
            </Box>
        </Box>
    );
};

export default Login;